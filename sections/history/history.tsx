import Paper from "./paper";
import { motion } from "framer-motion";

const years = [
  { year: "2024", amount: "56 616" },
  { year: "2023", amount: "58 455" },
  { year: "2022", amount: "49 115" },
  { year: "2021", amount: "280 356" },
  { year: "2020", amount: "57 193" },
];

export default function History() {
  return (
    <div className="w-full">
      {/* Rubrik & Hjärtan */}
      <div className="flex items-center justify-center text-center px-20">
        <img src="\vectorGraphics\heart.svg" className="w-40" />
        <h2
          className="flex-1 text-[#ACCAB2] font-bold !text-6xl leading-tight"
          style={{
            textShadow:
              "-0px 0px 0 black, -1px 1px 0 black, -5px 5px 0 white, -5px 5px 0 black",
          }}
        >
          I 5 år har Campus Skramlar tillsammans med er samlat in <br />
          <span className="underline">501 735 kronor</span> till musikhjälpen
        </h2>
        <img src="\vectorGraphics\heart.svg" className="w-40" />
      </div>
      {/* Positionering av tidningarna */}
      <div className="flex flex-wrap justify-center gap-12 w-full py-20">
        {years.map((team, i) => (
          <div key={i} className="flex justify-center w-[30%] py-4">
            <motion.div
              initial={{ scale: "200%", rotate: "-130deg" }}
              whileInView={{ scale: "100%", rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Paper year={team.year} amount={team.amount} position={i} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
