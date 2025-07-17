import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
      <h1>/forening</h1>
      <Link
        className="px-4 py-2 rounded bg-[#8A8635] text-white"
        href="/forening/profil"
      >
        Profil
      </Link>
      <Link
        className="px-4 py-2 rounded bg-[#ACCAB2] text-black"
        href="/forening/insamlat"
      >
        Insamlat
      </Link>
      <Link
        className="px-4 py-2 rounded bg-[#D06224] text-black"
        href="/forening/uppdateringar"
      >
        Uppdateringar
      </Link>
    </div>
  );
}
