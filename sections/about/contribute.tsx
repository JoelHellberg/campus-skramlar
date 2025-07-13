import Cloud from "./cloud"

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
        <Cloud/>
        {/* Main content */}
        <div className="flex">
          {/* Icon positioned on the bottom left */}
          <div className="flex flex-col-reverse">
            <img
              src="/vectorGraphics/icon2Dummy.png"
              alt="logo"
              className="w-30"
            />
          </div>
          {/* Text positionerad på högersidan */}
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
              Hör gärna av dig till oss på: 
              <br />forening@campusskramlar.se
              <br />foretag@campusskramlar.se
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
