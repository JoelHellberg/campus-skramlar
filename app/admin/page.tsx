"use client";

import DefaultPopup from "@/components/popups/defaultPopup";
import Link from "next/link";
import PopupContent from "./popupContent";
import supabase from "@/app/_lib/supabase/supabaseClient";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogInPopup from "./login/logInpopup";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/admin/?logIn=true");
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      {/* Popup */}
      <Suspense fallback={null}>
        <LogInPopup />
        <DefaultPopup popupRef_in="nyBossa" title="Skapa ny bössa">
          <PopupContent />
        </DefaultPopup>
      </Suspense>

      {/* Page Content */}
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <div className="flex">
          <h1>/admin</h1>
        </div>
        {isLoggedIn && (
          <>
            <h2>Bössor: </h2>
            <ForeningarDisplay />
            <Link href="/admin/?nyBossa=true">
              <div className="bg-white h-fit p-3 rounded-xl outline-4">
                <h2>Skapa ny bössa</h2>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

function ForeningarDisplay() {
  const router = useRouter();
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
        if (data.length == 0) {
        } else {
          setForeningar(data);
          console.log("Smoothies are: ", data);
          setFetchError(null);
        }
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
              isActive={forening.active}
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
  isActive: boolean;
  name: string;
  password: string;
};
function ForeningsRad(props: ForeningsProps) {
  return (
    <div
      className={"flex " + (props.isActive ? "bg-green-300" : "bg-yellow-200")}
    >
      <div className="outline-2 p-2 rounded-l">
        <p>
          <span className="font-bold">Förening: </span> {props.name}
        </p>
      </div>
      <div className="outline-2 p-2 rounded-r">
        <p>
          <span className="font-bold">Lösenord: </span>
          {props.password}
        </p>
      </div>
    </div>
  );
}
