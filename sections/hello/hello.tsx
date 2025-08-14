import Counter from "./counter";
import Gif from "./gif";
import Logo from "./logo";

export default function Hello() {
  return (
    <div className="w-full bg-[#FFF0D9] px-20 py-16 pb-20 flex flex-col h-[70vh] sm:h-auto">
      {/* Wrapper */}
      <div className="relative w-full flex">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center absolute inset-0 z-20">
          {/* Logga & bakgrund */}
          <Logo />
          {/* Mängden pengar insamlat */}
          <div
            className="-mt-10 text-[#ACCAB2] flex flex-col items-center"
            style={{
              textShadow:
                "-5px 5px 0 white, -12px 12px 0 #D06224, -18px 18px 0 #8A8635",
            }}
          >
            <Counter target={11000} />
            <h1 className="!text-6xl">Insamlat</h1>
          </div>
        </div>
        {/* GIF */}
        <Gif />
      </div>
    </div>
  );
}
