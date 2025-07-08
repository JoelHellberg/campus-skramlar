export default function Header() {
  return (
    <div className="w-full py-4 px-20 bg-[#FFF0D9] flex">
      {/* Left side */}
      <div
        className="w-5/12"
      >
        <img
          src={"/vectorGraphics/simplisticHouse.svg"}
          alt=""
          className="h-12 cursor-pointer"
        />
      </div>

      {/* Right side */}
      <div
        className="flex w-7/12 items-center justify-between px-10 ml-10
        text-black
    [&>h2]:cursor-pointer

    [&>h2]:relative
    [&>h2::after]:content-['']
    [&>h2::after]:absolute
    [&>h2::after]:left-0
    [&>h2::after]:-bottom-0
    [&>h2::after]:w-full
    [&>h2::after]:h-[2px]
    [&>h2::after]:bg-black
    [&>h2::after]:scale-x-0
    [&>h2::after]:origin-left
    [&>h2::after]:transition-transform
    [&>h2:hover::after]:scale-x-100"
      >
        <h2>Bidra</h2>
        <h2>Bössor</h2>
        <h2>Kontakt</h2>
        <h2>Tack</h2>
      </div>
    </div>
  );
}
