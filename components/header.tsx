"use client";

export default function Header() {
  return (
    <div className="w-full py-4 px-15 bg-[#FFF0D9] flex justify-center">
      {/* Område för menyknapparna med animationer för texten */}
      <div
        className="flex items-center [&>a]:mx-auto [&>h2]:cursor-pointer
        w-full xl:w-9/12 2xl:w-8/12

        [&>a]:relative
        [&>a::after]:content-['']
        [&>a::after]:absolute
        [&>a::after]:left-0
        [&>a::after]:-bottom-0
        [&>a::after]:w-full
        [&>a::after]:h-[2px]
        [&>a::after]:bg-black
        [&>a::after]:scale-x-0
        [&>a::after]:origin-left
        [&>a::after]:transition-transform
        [&>a:hover::after]:scale-x-100"
      >
        {/* Menyalternativ */}
        <a href="#about">
          <h2>Bidra</h2>
        </a>
        <a href="#piggyBanks">
          <h2>Bössor</h2>
        </a>
        <a href="#members">
          <h2>Kontakt</h2>
        </a>
        <a href="#thanks">
          <h2>Tack</h2>
        </a>
      </div>
    </div>
  );
}
