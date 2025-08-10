"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Contribute from "./contribute";
import Goal from "./goal";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <div
      id="about"
      className="relative 
      w-full 
      bg-gradient-to-b from-[#FFF0D9] via-[#FFF0D9] to-[#9CAF88] py-6"
    >
      {/* Animated background */}
      <motion.div
        className="absolute flex inset-0 flex-col justify-between overflow-hidden
        w-full"
        initial={{ opacity: 0.2, y: 200 }} // Start below, invisible
        animate={{ opacity: 1, y: 0 }} // Move up, fade in
        transition={{ duration: 0.8, ease: "backOut" }} // Go over, then in
      >
        <motion.div
          className="absolute flex inset-0 flex-col justify-between my-auto
        w-full aspect-square
        bg-[url('/tempAbout.png')] bg-cover"
          style={{ y }}
        />
        {/* Den beiga och gröna övvergången mellan "hello" och "piggyBanks" */}
        <img
          src={"/vectorGraphics/beigeTransition.svg"}
          alt=""
          className="w-full relative"
        />
        <img
          src={"/vectorGraphics/greenTransition.svg"}
          alt=""
          className="w-full relative"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }} // Go over, then in
        className="flex justify-center items-center gap-[15vw] py-20"
      >
        <Goal />
        <Contribute />
      </motion.div>
    </div>
  );
}
