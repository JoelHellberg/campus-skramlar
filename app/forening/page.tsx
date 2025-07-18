"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../_lib/supabase/supabaseClient";

export default function Home() {
  const [fetchError, setFetchError]: any = useState(null);
  const [bossaGeneral, setBossaGeneral]: any = useState(null);

  useEffect(() => {
    const fetchPiggyBanks = async () => {
      const foreningsId = localStorage.getItem("foreningsId");
      if (foreningsId) {
        const { data, error } = await supabase
          .from("bossorGeneral")
          .select()
          .eq("id", foreningsId);
        if (error) {
          setFetchError("Could not fetch the piggy bank");
          setBossaGeneral(null);
          console.log(error);
        }
        if (data) {
          if (data.length !== 0) {
            setBossaGeneral(data);
            console.log("Smoothies are: ", data);
            setFetchError(null);
          }
        }
      }
    };
    fetchPiggyBanks();
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
      {bossaGeneral && (
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
