import Link from "next/link";

export default function ForeningHeader() {
  return (
    <div className="w-5/6 mt-10 flex justify-between">
      <Link href="/forening">
        <img src="\vectorGraphics\backButton.svg" className="h-14 transform transition-transform duration-300 hover:scale-110" />
      </Link>
      <div className="bg-[#8A8A8A] aspect-square h-14 rounded-full outline-4 flex items-center justify-center cursor-pointer
      transform transition-transform duration-300 hover:scale-110">
        <h1 className="text-white !text-5xl -ml-1">i</h1>
      </div>
    </div>
  );
}
