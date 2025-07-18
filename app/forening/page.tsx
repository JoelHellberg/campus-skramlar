"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../_lib/supabase/supabaseClient";
import { useBossaData } from "./_lib/data";

type bossaGeneral = {
  forenings_namn: string;
  pengar_insamlat: number;
};

export default function Home() {
  const [fetchError, setFetchError]: any = useState(null);
  const [bossaGeneral, setBossaGeneral] = useState<bossaGeneral | null>(null);
  const updateBossaGeneral = useBossaData((state) => state.setBossaGeneral);

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
            const formatted_data = data[0] as bossaGeneral | undefined;
            if (formatted_data) {
              setBossaGeneral(formatted_data);
              updateBossaGeneral(
                formatted_data.forenings_namn,
                formatted_data.pengar_insamlat
              );
              console.log("Smoothies are: ", data);
              setFetchError(null);
            }
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
