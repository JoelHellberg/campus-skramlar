const sponsors = [
  { name: "dummySponsor1" },
  { name: "dummySponsor2" },
  { name: "dummySponsor1" },
  { name: "dummySponsor2" },
  { name: "dummySponsor1" },
  { name: "dummySponsor2" },
  { name: "dummySponsor2" },
  { name: "dummySponsor1" },
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
              src={`/sponsors/${sponsor.name}.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
