export default function Hello() {
  return (
    <div className="w-full bg-[#FFF0D9] px-20 py-15 flex flex-col">
      {/* Wrapper */}
      <div className="relative w-full">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center absolute inset-0 z-20">
          <img src="/logo.svg" alt="logo" className="w-82" />
          <div
            className="-mt-15 text-[#ACCAB2] flex flex-col items-center"
            style={{
              textShadow:
                "-5px 5px 0 white, -12px 12px 0 #D06224, -18px 18px 0 #8A8635",
            }}
          >
            <h1>11 000 kr</h1>
            <h1 className="!text-6xl">Insamlat</h1>
          </div>
        </div>

        {/* Logo shadow */}
        <div className="flex items-center justify-center absolute inset-0 z-15">
          <div className="h-82 w-82 -mt-26 rounded-full bg-black opacity-20" />
        </div>

        {/* Beige Overlay to dimm gif intensity */}
        <div className="absolute inset-0 bg-[#FFF0D9] opacity-50 z-10" />

        {/* GIF */}
        <img src="/animation.gif" alt="" className="w-full relative z-0" />
      </div>
    </div>
  );
}
