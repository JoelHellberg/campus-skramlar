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
    <div
      className="w-full p-5 
    lg:p-10 2xl:p-20"
    >
      <div className="w-full h-fit">
        {/* Rubrik & Hjärtan */}
        <div
          className="flex items-center justify-center text-center aspect-[6/1] mb-10 bg-[#FFFCF8] rounded-xl outline-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]
        px-5 md:px-10"
        >
          <img
            src="\vectorGraphics\heart.svg"
            className="hidden xl:block w-40"
          />
          <h3
            className="flex-1 text-[#1d0e05] !font-bold leading-tight xl:px-10 py-6 rounded-4xl
            text-3xl sm:text-5xl md:!text-6xl 
            !font-sans italic"
            style={{
              textShadow:
                "-0px 0px 0 white, -4px 4px 0 white, 1px -1px 0 white",
            }}
          >
            I 5 år har Campus Skramlar tillsammans med er samlat in{" "}
            <span> </span>
            <span className="underline">501 735 kronor</span> till musikhjälpen
          </h3>
          <img
            src="\vectorGraphics\heart.svg"
            className="hidden xl:block w-40"
          />
        </div>
        {/* Positionering av tidningarna */}
        <div
          className="flex flex-wrap justify-center gap-y-12 w-full py-20 
          sm:outline-2 sm:[background-image:repeating-conic-gradient(#ACCAB2_0_25%,#FFF0D9_0_50%)] sm:[background-size:200px_200px] sm:shadow-[0_0_20px_rgba(0,0,0,0.3)] sm:rounded-xl"
        >
          {years.map((team, i) => (
            <div
              key={i}
              className="flex justify-center w-[100%] sm:w-[50%] lg:w-[30%] py-4"
            >
              <Paper year={team.year} amount={team.amount} position={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
