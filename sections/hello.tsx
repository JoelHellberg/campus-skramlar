export default function Hello() {
  return (
    <div className="w-full bg-[#FFF0D9] px-20 py-15 flex flex-col">
      {/* Wrapper */}
      <div className="relative w-full">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center absolute inset-0 z-20">
          <img src="/logo.png" alt="logo" className="w-80" />
          <div
            className="-mt-6 text-[#ACCAB2]"
            style={{
              textShadow:
                "-1px 1px 0 white, -2px 2px 0 #D06224, -3px 3px 0 #8A8635",
            }}
          >
            <h1>11 000 kr</h1>
            <h1>insamlat</h1>
          </div>
        </div>

        {/* Logo shadow */}
        <div className="flex items-center justify-center absolute inset-0 z-15">
          <div className="h-82 w-82 -mt-4 rounded-full bg-black opacity-20" />
        </div>

        {/* Beige Overlay to dimm gif intensity */}
        <div className="absolute inset-0 bg-[#FFF0D9] opacity-50 z-10" />

        {/* GIF */}
        <img src="/animation.gif" alt="" className="w-full relative z-0" />
      </div>
    </div>
  );
}
