export default function Header() {
  return (
    <div className="w-full py-4 bg-[#FFF0D9] flex">
      {/* Left side */}
      <div
        className="w-5/12 pl-10
      bg-blue-400"
      >
        <img
          src={"/vectorGraphics/simplisticHouse.svg"}
          alt=""
          className="h-12"
        />
      </div>

      {/* Right side */}
      <div
        className="flex w-7/12 items-center justify-between px-10
      bg-pink-400"
      >
        <h2>Bidra</h2>
        <h2>Bössor</h2>
        <h2>Kontakt</h2>
        <h2>Tack</h2>
      </div>
    </div>
  );
}
