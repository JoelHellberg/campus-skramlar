import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PiggyBank from "./piggyBank";

export default function PiggyBanks() {
  const [amountOfNeedles, setAmountOfNeedles] = useState(2);
  // Tillfällig dummy lista för att generera 8st bössor
  const items = [0, 1, 2, 3, 4, 5, 6, 7];

  function handleNeedleClick() {
    setAmountOfNeedles((prev) => {
      const newCount = prev - 1;
      if (newCount <= 0) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
      return newCount;
    });
  }

  return (
    <div id="piggyBanks" className="px-10 py-10">
      <div className="flex">
        {/* Div runt nålen så vi kan veta när alla nålar försvunnit */}
        <div onClick={handleNeedleClick}>
          <NeedleDot />
        </div>
        {/* Rubrik */}
        <div className="flex grow items-center justify-center text-center">
          <h3 className="!text-5xl">Bössor</h3>
        </div>
        {/* Div runt nålen så vi kan veta när alla nålar försvunnit */}
        <div onClick={handleNeedleClick}>
          <NeedleDot />
        </div>
      </div>

      {/* "Underrubrik" */}
      <div className="w-full flex items-center justify-center text-center text-[#707070] mt-4">
        <h3 className="!text-4xl">(Klicka på en bössa för att se mer)</h3>
      </div>
      {/* Positionering av alla bössor */}
      <div className="flex flex-wrap justify-center gap-12 w-full py-15">
        {items.map((_, i) => (
          <div key={i} className="w-[30%] py-2">
            <PiggyBank position={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Separat funktion för nålen */
function NeedleDot() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="relative">
      {/* Animation för att på "coolare" sätt ta bort nålen när den klickas på */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute -inset-4 bg-[url('/vectorGraphics/needle.svg')] bg-cover cursor-pointer"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsVisible(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="bg-[#9CAF88] w-10 aspect-square rounded-full" />
    </div>
  );
}
