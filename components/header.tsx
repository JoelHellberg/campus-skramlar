"use client"

export default function Header() {
  return (
    <div className="w-full py-4 px-15 bg-[#FFF0D9] flex justify-center">
      <div
        className="flex w-8/12 items-center justify-between px-10 ml-10 [&>h2]:cursor-pointer

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
