"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNeedleData } from "./needleData";
import { useRouter } from "next/navigation";

export default function NeedleDot() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const needlesAmount = useNeedleData((state) => state.needlesAmount);
  const removeNeedle = useNeedleData((state) => state.removeNeedle);
  function handleNeedleClick() {
    if (isVisible) {
      if (needlesAmount - 1 == 0) {
        // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        router.push("/?heythere=true", { scroll: false });
      }
      removeNeedle();
    }
  }
  return (
    <div className="hidden lg:block">
      <div className="relative" onClick={handleNeedleClick}>
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
        <div className="bg-[#9CAF88] w-10 aspect-square rounded-full outline-3" />
      </div>
    </div>
  );
}
