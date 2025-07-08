export default function Contribute() {
  return (
    <div className="relative w-fit">
      {/* Shadow copy behind */}
      <div
        className="absolute top-3 right-3 w-full h-full z-0 
                  bg-[#9CAF88] rounded-3xl outline-3"
      />

      {/* Real content */}
      <div
        className="relative z-10 flex flex-col bg-white outline-4 rounded-3xl p-4
      items-center justify-center
      w-lg h-64"
      >
        <div className="absolute top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 w-60 h-50 bg-[url('/vectorGraphics/cloud.svg')] bg-contain bg-no-repeat bg-center z-20
        flex items-center justify-center text-center p-5" >
        <h2 className="!text-2xl !font-bold">Hur kan du bidra?</h2>
        </div>
        <div className="flex">
          <div className="flex flex-col-reverse">
            <img
              src="/vectorGraphics/icon2Dummy.png"
              alt="logo"
              className="w-30"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center text-center -ml-3">
            <p className="italic text-xs text-[#7E7E7E] p-3 z-1">
              Du som privatperson kan hjälpa till på massor av olika sätt! Du
              kan göra allt från att panta burkar till att hålla i någon slags
              aktivitet.
              <br />
              Gå gärna ihop en grupp och gör något gemensamt!
              <br />
              <br />
              Är du en förening eller företag som vill sammarbeta med oss?
              <br />
              <br />
              Hör gärna av dig till oss på: forening@campusskramlar.se
              foretag@campusskramlar.se
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
