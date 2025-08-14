export default function Goal() {
  return (
    <div className="relative w-fit mx-auto">
      {/* Shadow copy behind */}
      <div
        className="absolute top-5 right-5 w-full h-full z-0 
                  bg-[#D44220] rounded-3xl outline-3
                  [background-image:radial-gradient(circle,black_2px,transparent_2px),radial-gradient(circle,black_2px,transparent_2px)] 
          [background-size:8px_8px] 
          [background-position:0_0,4px_4px]"
      />

      {/* Real content */}
      <div
        className="relative z-10 flex flex-col bg-white outline-4 rounded-3xl p-4
      items-center justify-center
      w-lg h-64"
      >
        <h2 className="!text-lg !font-bold mb-4 text-[#ACCAB2]">
          LiUs STUDENTDRIVNA INSAMLING!
        </h2>
        <div className="flex">
          {/* Rubrik och brödtext placerad på högersidan */}
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            <h2 className="!text-2xl !font-bold">Vad är vårt mål?</h2>
            <p className="italic font-bold text-xs text-[#7E7E7E] p-3 z-1">
              Vårt mål är att sammanföra alla studenter på Liu och få så mycket
              folk som möjligt att engagera sig till att samla in pengar för
              Musikhjälpen. Men självklart se till att alla har fantastiskt
              roligt på vägen!
            </p>
          </div>
          {/* Icon positioned on the bottom right */}
          <div className="flex flex-col-reverse">
            <img src="/vectorGraphics/goal.svg" alt="logo" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
