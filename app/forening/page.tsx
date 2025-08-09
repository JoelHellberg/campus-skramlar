"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useBossaData } from "./_lib/data";
import LogInPopup from "./login/logInpopup";
import { verifySession } from "../_lib/authentication";
import { useRouter } from "next/navigation"; // ✅ correct for App Router
import ForeningHeader from "./components/foreningHeader";
import Loading from "@/components/loading";

export default function Home() {
  const router = useRouter();
  const initialize = useBossaData((state) => state.initialize);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const sessionId = await verifySession();

      if (sessionId) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/forening/?logIn=true");
      }
    };
    checkIfLoggedIn();
  }, []);

  return (
    <>
      <Loading />
      {/* Popups */}
      <Suspense fallback={null}>
        <LogInPopup />
      </Suspense>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <ForeningHeader />
        <h1 className="mt-10">/forening</h1>
        <div className="mt-16 flex flex-col gap-10 w-fit text-center font-semibold">
          {isLoggedIn && (
            <>
              <Link
                className="px-16 py-3 rounded-xl bg-[#8A8635] text-white border-4 border-black text-shadow-sm/30 shadow-xl/40
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
                href="/forening/profil"
              >
                Profil
              </Link>
              {foreningsNamn && (
                <>
                  <Link
                    className="px-16 py-3 rounded-xl bg-[#ACCAB2] text-black border-4 text-shadow-sm shadow-xl/40
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
                    href="/forening/insamlat"
                  >
                    Insamlat
                  </Link>
                  <Link
                    className="px-16 py-3 rounded-xl bg-[#D06224] text-black border-4 text-shadow-sm shadow-xl/40
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
                    href="/forening/uppdateringar"
                  >
                    Uppdateringar
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
