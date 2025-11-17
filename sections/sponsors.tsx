const sponsors = [
  { name: "Monster.svg" },
  { name: "PaperStreet.PNG" },
  { name: "Varldens.png" },
  { name: "Latitude.png" },
  { name: "Yakobs.png" },
  { name: "EyBro.png" },
  { name: "Returpack.png" },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col content-center justify-center text-center">
      <h1 className="text-white mt-20">
        Och ett jättestort tack till årets <br /> sponsorer!
      </h1>
      <div className="flex flex-wrap justify-center w-full">
        {sponsors.map((sponsor: any, index: number) => (
          <div
            key={index}
            className="flex justify-center aspect-square mx-auto my-8
                    w-[45%] md:w-[26%]"
          >
            <img
              className="object-contain mx-auto"
              src={`/sponsors/${sponsor.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
