import { motion } from "framer-motion";
import Counter from "./counter";

export default function Hello() {
  return (
    <div className="w-full bg-[#FFF0D9] px-20 py-16 pb-20 flex flex-col">
      {/* Wrapper */}
      <div className="relative w-full">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center absolute inset-0 z-20">
          {/* Div för logga & bakgrund */}
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
          {/* Mängden pengar insamlat */}
          <div
            className="-mt-10 text-[#ACCAB2] flex flex-col items-center"
            style={{
              textShadow:
                "-5px 5px 0 white, -12px 12px 0 #D06224, -18px 18px 0 #8A8635",
            }}
          >
            <Counter target={11000} />
            <h1 className="!text-6xl">Insamlat</h1>
          </div>
        </div>

        {/* Beige Overlay to dimm gif intensity */}

        {/* GIF */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="relative w-fit"
        >
          {/* White Background */}
          <img
            src="/animationBackground.svg"
            className="absolute top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 scale-103"
          />

          {/* The Animated GIF */}
          <img src="/animation.gif" alt="" className="w-full relative z-0" />

          {/* Beige overlay */}
          <div className="absolute -inset-10 bg-[#FFF0D9] opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
