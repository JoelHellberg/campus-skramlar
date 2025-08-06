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
    <div className="w-full p-10">
      <div className="w-full h-fit p-10 rounded-4xl [background-image:repeating-conic-gradient(#ACCAB2_0_25%,#FFF0D9_0_50%)] [background-size:200px_200px]">
      {/* Rubrik & Hjärtan */}
      <div className="flex items-center justify-center text-center px-20">
        <img src="\vectorGraphics\heart.svg" className="w-40" />
        <h3
          className="flex-1 text-[#1d0e05] !font-extrabold !text-6xl leading-tight mx-10 py-6 rounded-4xl bg-[#ACCAB2] shadow-xl"
          style={{
            textShadow:
              "-0px 0px 0 white, -4px 4px 0 white, 1px -1px 0 white",
          }}
        >
          I 5 år har Campus Skramlar tillsammans med er samlat in <span> </span>
          <span className="underline">501 735 kronor</span> till musikhjälpen
        </h3>
        <img src="\vectorGraphics\heart.svg" className="w-40" />
      </div>
      {/* Positionering av tidningarna */}
      <div className="flex flex-wrap justify-center gap-12 w-full py-20">
        {years.map((team, i) => (
          <div key={i} className="flex justify-center w-[30%] py-4">
            <motion.div
              initial={{ scale: "150%", rotate: "-130deg" }}
              whileInView={{ scale: "100%", rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paper year={team.year} amount={team.amount} position={i} />
            </motion.div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
