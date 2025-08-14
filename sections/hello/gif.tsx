"use client";

import { motion } from "framer-motion";

export default function Gif() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0, ease: "easeInOut" }}
      className="relative w-full overflow-hidden lg:overflow-visible"
    >
      {/* White Background */}
      <img
        src="/animationBackground.svg"
        className="absolute top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 scale-103"
      />

      {/* The Animated GIF */}
      <motion.img
        initial={{ y: 200 }} // Start below, invisible
        animate={{ y: 0 }} // Move up, fade in
        transition={{ duration: 0.8, ease: "backOut" }}
        src="/animation.gif"
        alt=""
        className="object-cover h-full sm:w-full sm:h-auto relative z-0"
      />

      {/* Beige Overlay to dimm gif intensity */}
      <div className="absolute -inset-10 bg-[#FFF0D9] opacity-50" />
    </motion.div>
  );
}
