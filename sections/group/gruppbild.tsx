"use client";
import { motion } from "framer-motion";

export default function Gruppbild() {
  return (
    <motion.img
      src="/photos/gruppbild.png"
      className="w-full -mb-[5vw] shadow-xl/55 rounded-md bg-pink-900 outline-4"
      initial={{ opacity: 0.2, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 2.0, ease: "easeOut" }}
    />
  );
}
