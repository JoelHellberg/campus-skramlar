import { Suspense } from "react";
import LogInPopup from "./popups/logInPopup";
import ForeningarDisplay from "./foreningarDisplay";
import Link from "next/link";
import NyBossaPopup from "./popups/nyBossaPopup";
import { createSupabaseServer } from "../_lib/supabase/supabaseServer";

export default async function SomePage() {
  // Await the client since createSupabaseServer is async
  const supabase = await createSupabaseServer();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <Suspense fallback={null}>
        <LogInPopup />
      </Suspense>
    );
  }

  return (
    <>
      {/* Popup */}
      <Suspense fallback={null}>
        <NyBossaPopup />
      </Suspense>
      <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
        <div className="flex">
          <h1>/admin</h1>
        </div>
        <h2>Bössor: </h2>
        <ForeningarDisplay />
        <Link href="/admin/?nyBossa=true">
          <div className="bg-white h-fit p-3 rounded-xl outline-4">
            <h2>Skapa ny bössa</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
