"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="relative -z-10 group cursor-pointer">
      <a
        className="hidden sm:block"
        href="https://bossan.musikhjalpen.se/campus-skramlar/?fbclid=IwY2xjawM4erxleHRuA2FlbQIxMQABHvDl0JnTLAEg_raoMjV_e4IcmzRXNMjFlPeZIhBlLsN6XWVEJD2hW0P5Y7mD_aem_3MIExDXONNPb9ryzRch5sQ"
      >
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
          className="w-[60vw] sm:w-[25vw] xl:w-[20vw]"
        />
        {/* Hover image */}
        <img
          src="https://images.ctfassets.net/75ay4e234rnk/2udNK3CEo2fm6RdbGGoOva/d52b4afc569efa787e2f64e0f16fdc71/f06d8ee4-4fcd-4236-bca2-9fde7c3bc382.png"
          alt="logo hover"
          className="absolute inset-0 w-full h-full object-contain bg-gray-900 rounded-full
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
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
          className="absolute -inset-4 rounded-full -z-10 bg-white group-hover:bg-blue-400 transition-colors duration-1000 ease-in-out"
        />
      </a>
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
