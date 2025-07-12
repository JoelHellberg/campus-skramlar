import Paper from "./paper";

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
      <div className="flex items-center justify-center text-center">
        <img src="\vectorGraphics\heart.svg" className="" />
        <h2
          className="flex-1 text-[#ACCAB2] font-bold"
          style={{ textShadow: "-3px 3px 0 white" }}
        >
          I 5 år har Campus Skramlar tillsammans med er samlat in 501 735 kronor
          till musikhjälpen
        </h2>
        <img src="\vectorGraphics\heart.svg" className="" />
      </div>
      <div className="flex flex-wrap justify-center gap-12 w-full py-15">
        {years.map((team, i) => (
          <div key={i} className="flex justify-center w-[30%] py-2">
            <Paper year={team.year} amount={team.amount} />
          </div>
        ))}
      </div>
    </div>
  );
}
