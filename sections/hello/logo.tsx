"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="relative -z-10">
      {/* Loggan */}
      <motion.img
        initial={{ scale: "80%" }}
        animate={{ scale: "100%" }}
        transition={{
          type: "spring",
          stiffness: 400, // higher = snappier
          damping: 10,
        }}
        src="/logo.svg"
        alt="logo"
        className="w-82"
      />
      {/* Logo frame */}
      <motion.div
        initial={{ scale: "80%" }}
        animate={{ scale: "100%" }}
        transition={{
          type: "spring",
          stiffness: 400, // higher = snappier
          damping: 5,
        }}
        className="absolute -inset-4 rounded-full -z-10 bg-white"
      />
      {/* Logo shadow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
        className="absolute -inset-4 top-5 rounded-full -z-20 bg-black"
      />
    </div>
  );
}
