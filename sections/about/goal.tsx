export default function Goal() {
  return (
    <div className="relative w-fit">
      {/* Shadow copy behind */}
      <div
        className="absolute top-3 right-3 w-full h-full z-0 
                  bg-[#D44220] rounded-3xl outline-3"
      />

      {/* Real content */}
      <div className="relative z-10 flex flex-col bg-white outline-4 rounded-3xl p-4
      items-center justify-center
      w-lg h-64">
        <h2 className="!text-lg !font-bold mb-4 text-[#ACCAB2]">
          LiUs STUDENTDRIVNA INSAMLING!
        </h2>
        <div className="flex">
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            <h2 className="!text-2xl !font-bold">Vad är vårt mål?</h2>
            <p className="italic text-xs text-[#7E7E7E] p-3 z-1">
              Vårt mål är att sammanföra alla studenter på Liu och få så mycket
              folk som möjligt att engagera sig till att samla in pengar för
              Musikhjälpen. Men självklart se till att alla har fantastiskt
              roligt på vägen!
            </p>
          </div>
          <div className="flex flex-col-reverse -ml-8">
            <img
              src="/vectorGraphics/icon1Dummy.png"
              alt="logo"
              className="w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
