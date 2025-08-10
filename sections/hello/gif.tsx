"use client";

import { motion } from "framer-motion";

export default function Gif() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0, ease: "easeInOut" }}
      className="relative w-full"
    >
      {/* White Background */}
      <img
        src="/animationBackground.svg"
        className="absolute top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 scale-103"
      />

      {/* The Animated GIF */}
      <img src="/animation.gif" alt="" className="w-full relative z-0" />

      {/* Beige Overlay to dimm gif intensity */}
      <div className="absolute -inset-10 bg-[#FFF0D9] opacity-50" />
    </motion.div>
  );
}
