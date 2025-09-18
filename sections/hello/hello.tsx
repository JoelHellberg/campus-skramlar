import Counter from "./counter";
import Gif from "./gif";
import Logo from "./logo";

export default function Hello() {
  return (
    <div className="w-full bg-[#FFF0D9] xl:px-20 py-16 pb-20 flex flex-col h-[80vh] sm:h-auto">
      {/* Wrapper */}
      <div className="relative w-full h-full flex">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center absolute inset-0 z-20">
          {/* Logga & bakgrund */}
          <Logo />
          {/* Mängden pengar insamlat */}
          <div
            className="-mt-10 xl:-mt-15 2xl:-mt-20 text-[#ACCAB2] flex flex-col items-center text-center"
            style={{
              textShadow:
                "-5px 5px 0 white, -12px 12px 0 #D06224, -18px 18px 0 #8A8635",
            }}
          >
            <Counter target={1519} />
            <h1 className="!text-6xl xl:!text-7xl 2xl:!text-8xl 2xl:-mt-4">
              Insamlat
            </h1>
          </div>
        </div>
        {/* GIF */}
        <Gif />
      </div>
    </div>
  );
}
