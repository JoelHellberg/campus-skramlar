import Link from "next/link";
import { Suspense } from "react";
import LogInPopup from "./popups/logInpopup";
import { verifySession } from "../_lib/authentication";
import ForeningHeader from "./components/foreningHeader";
import LayoutLoader from "@/components/loaders/layoutLoader";
import SignOutPopup from "./popups/signOutPopup";
import { BossaGeneral } from "../_lib/types";
import { fetchBossaGeneral } from "../_lib/supabase/clientFunctions";

export default async function Home() {
  const sessionId = await verifySession();

  if (!sessionId) {
    return (
      <Suspense fallback={null}>
        <LogInPopup />
      </Suspense>
    );
  }
  const bossaGeneral: BossaGeneral | null = await fetchBossaGeneral(sessionId);

  return (
    <>
      {/* Popups */}
      <Suspense fallback={null}>
        <SignOutPopup />
      </Suspense>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <ForeningHeader />
        <h1 className="mt-10">/forening</h1>
        <div className="mt-16 flex flex-col gap-10 w-fit text-center font-semibold">
          <>
            <Link
              className="px-16 py-3 rounded-xl bg-[#8A8635] text-white border-4 border-black text-shadow-sm/30 shadow-xl/40
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
              href="/forening/profil"
            >
              Profil
            </Link>
            {bossaGeneral && (
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
        </div>
      </div>
    </>
  );
}
