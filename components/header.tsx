"use client";

export default function Header() {
  return (
    <div className="w-full py-4 px-15 bg-[#FFF0D9] flex justify-center">
      <div
        className="flex w-8/12 items-center justify-between px-10 ml-10 [&>h2]:cursor-pointer

    [&>*]:relative
    [&>*::after]:content-['']
    [&>*::after]:absolute
    [&>*::after]:left-0
    [&>*::after]:-bottom-0
    [&>*::after]:w-full
    [&>*::after]:h-[2px]
    [&>*::after]:bg-black
    [&>*::after]:scale-x-0
    [&>*::after]:origin-left
    [&>*::after]:transition-transform
    [&>*:hover::after]:scale-x-100"
      >
        <a href="#about">
          <h2>Bidra</h2>
        </a>
        <a href="#piggyBanks">
          <h2>Bössor</h2>
        </a>
        <a href="#group">
          <h2>Kontakt</h2>
        </a>
        <a href="#thanks">
          <h2>Tack</h2>
        </a>
      </div>
    </div>
  );
}
