"use client";

import DefaultPopup from "@/components/popups/defaultPopup";
import Link from "next/link";
import PopupContent from "./popupContent";
import supabase from "@/app/supabase/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      {/* Popup */}
      <DefaultPopup popupRef="nyBossa" title="Skapa ny bössa">
        <PopupContent />
      </DefaultPopup>

      {/* Page Content */}
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <div className="flex">
          <h1>/bossor</h1>
          <Link href="/bossor/?nyBossa=true">
            <div className="bg-white h-fit p-3 rounded-xl outline-4">
              <h2>Skapa ny bössa</h2>
            </div>
          </Link>
        </div>
        <h2>Bössor: </h2>
        <ForeningarDisplay />
      </div>
    </>
  );
}

function ForeningarDisplay() {
  const [fetchError, setFetchError]: any = useState(null);
  const [foreningar, setForeningar]: any = useState(null);

  useEffect(() => {
    const fetchForeningar = async () => {
      const { data, error } = await supabase.from("bossorPrivate").select();
      if (error) {
        setFetchError("Could not fetch foreningar");
        setForeningar(null);
        console.log(error);
      }
      if (data) {
        setForeningar(data);
        console.log("Smoothies are: ", data);
        setFetchError(null);
      }
    };
    fetchForeningar();
  }, []);
  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {foreningar && (
        <>
          {foreningar.map((forening: any, index: number) => (
            <ForeningsRad
              name={forening.forenings_namn}
              password={forening.password}
              key={index}
            />
          ))}
        </>
      )}
    </div>
  );
}

type ForeningsProps = {
  name: string;
  password: string;
};
function ForeningsRad(props: ForeningsProps) {
  return (
    <div className="flex bg-white">
      <div className="outline-2 p-2 rounded-l">
        <p>
          <span className="font-bold">Förening:</span> {"Föreningsnamn blabla"}
        </p>
      </div>
      <div className="outline-2 p-2 rounded-r-2xl">
        <p>
          <span className="font-bold">Lösenord:</span>{" "}
          {"ajkhsdk1237bhjhjsad989"}
        </p>
      </div>
    </div>
  );
}
