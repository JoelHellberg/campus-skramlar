"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useBossaData } from "./_lib/data";
import LogInPopup from "./login/logInpopup";
import { verifySession } from "../_lib/authentication";
import { useRouter } from "next/navigation"; // ✅ correct for App Router

export default function Home() {
  const router = useRouter();
  const initialize = useBossaData((state) => state.initialize);
  const foreningsId = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      if (!foreningsId) return;
      const sessionId = await verifySession();

      if (sessionId == foreningsId) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/forening/?logIn=true");
      }
    };
    checkIfLoggedIn();
  }, [foreningsId]);

  return (
    <>
      {/* Popups */}
      <Suspense fallback={null}>
        <LogInPopup />
      </Suspense>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <h1>/forening</h1>
        {isLoggedIn && (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
