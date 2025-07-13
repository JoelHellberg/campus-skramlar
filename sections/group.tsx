import { PaperTear } from "@/assets/vectorGraphics";
import { Papersheet } from "@/assets/vectorGraphics";
import { motion } from "framer-motion";
console.log("paperTear structure: ", PaperTear);

export default function Group() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* PaperTear Transition */}

      <PaperTear className="w-full h-[5vw]" />
      {/* Rubrik */}
      <div className="relative my-10 px-10 py-5">
        <Papersheet className="absolute inset-0 w-full  h-full -z-1" />
        <h1>Projektgruppen 2025</h1>
      </div>

      {/* Gruppbild & Backdrop */}
      <div className="relative mt-10 w-2/3">
        <div className="absolute -inset-6 bg-white -z-1 shadow-2xl/55 rounded-md" />
        <div className="relative bg-gray-400">
          <motion.img
            src="/photos/gruppbild.png"
            className="w-full -mb-[5vw] shadow-xl/55 rounded-md bg-pink-900"
            initial={{ opacity: 0.2, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* PaperTear Transition */}
      <PaperTear className="w-full h-[5vw] rotate-180" />
    </div>
  );
}
