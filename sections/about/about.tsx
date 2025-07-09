import { motion } from "framer-motion";
import Contribute from "./contribute";
import Goal from "./goal";

export default function About() {
  return (
    <div
      id="about"
      className="relative w-full bg-gradient-to-b from-[#FFF0D9] via-[#FFF0D9] to-[#9CAF88] py-6"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 w-full bg-[url('/tempAbout.png')] bg-cover flex flex-col justify-between"
        initial={{ opacity: 0.2, y: 200 }} // Start below, invisible
        animate={{ opacity: 1, y: 0 }} // Move up, fade in
        transition={{ duration: 0.8, ease: "backOut" }}
      >
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
      <div className="flex justify-center items-center gap-[15vw] py-20">
        <Goal />
        <Contribute />
      </div>
    </div>
  );
}
