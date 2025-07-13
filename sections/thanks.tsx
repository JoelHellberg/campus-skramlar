const logos = [
  "dummySponsor1",
  "dummySponsor2",
  "dummySponsor3",
  "dummySponsor4",
  "dummySponsor5",
  "dummySponsor6",
  "dummySponsor7",
  "dummySponsor8",
];

export default function Thanks() {
  return (
    <div id="thanks" className="w-full py-24 flex justify-center">
      {/* Outline div 1 */}
      <div className="w-5/6 p-3 rounded-2xl bg-[#DFCFA0]">
        {/* Outline div 2 */}
        <div className="w-full border-8 rounded-2xl border-[#7C745C] p-3">
          {/* Main Content */}
          <div className="flex flex-col w-full justify-center p-10 rounded-2xl bg-[#EEDDC4] text-center">
            <h1 className="!text-6xl">
              Tack till alla föreningar som har hjälpt till och medverkat under
              året!
            </h1>
            {/* Positionering av loggor */}
            <div className="flex flex-wrap justify-center gap-12 w-full p-15">
              {logos.map((logoName, i) => (
                <div key={i} className="flex justify-center w-[30%] p-6">
                  <img src={"/logos/" + logoName + ".png"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
