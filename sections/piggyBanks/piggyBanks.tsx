import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PiggyBank from "./piggyBank";

export default function PiggyBanks() {
  const [amountOfNeedles, setAmountOfNeedles] = useState(2);

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
        <div onClick={handleNeedleClick}>
          <NeedleDot />
        </div>
        <div className="flex grow items-center justify-center text-center">
          <h4 className="!text-4xl">Bössor</h4>
        </div>
        <div onClick={handleNeedleClick}>
          <NeedleDot />
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-center text-[#707070] mt-2">
        <h4 className="!text-3xl">(Klicka på en bössa för att se mer)</h4>
      </div>
      <div className="flex justify-between w-full py-10">
        <PiggyBank position={0} />
        <PiggyBank position={1}/>
        <PiggyBank position={2}/>
      </div>
      <div className="flex justify-between w-full py-10">
        <PiggyBank position={3}/>
        <PiggyBank position={4}/>
        <PiggyBank position={5}/>
      </div>
      <div className="flex justify-between w-full py-10">
        <PiggyBank position={6}/>
        <PiggyBank position={7}/>
        <PiggyBank position={8}/>
      </div>
    </div>
  );
}

function NeedleDot() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="relative">
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
