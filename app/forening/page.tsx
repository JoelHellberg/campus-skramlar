"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBossaData } from "./_lib/data";

export default function Home() {
  const initialize = useBossaData((state) => state.initialize);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
      <h1>/forening</h1>
      <Link
        className="px-4 py-2 rounded bg-[#8A8635] text-white"
        href="/forening/profil"
      >
        Profil
      </Link>
      {foreningsNamn && (
        <>
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
        </>
      )}
    </div>
  );
}
