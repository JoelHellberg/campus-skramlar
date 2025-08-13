import { Suspense } from "react";
import LogInPopup from "./popups/logInPopup";
import ForeningarDisplay from "./bossor/foreningarDisplay";
import Link from "next/link";
import NyBossaPopup from "./popups/nyBossaPopup";
import { createSupabaseServer } from "../_lib/supabase/supabaseServer";
import EditPopup from "./popups/editPopup";
import DeletePopup from "./popups/deletePopup";

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
    <div className="bg-gradient-to-r from-white to-blue-50">
      {/* Popup */}
      <Suspense fallback={null}>
        <NyBossaPopup />
        <EditPopup />
        <DeletePopup />
      </Suspense>
      <div className="flex flex-col items-center w-4/5 mx-auto h-screen bg-blue">
        <div className="flex items-center w-full">
          <h1 className="mx-auto">/admin</h1>
          <Link className="mx-auto" href="/admin/?nyBossa=true">
            <div className="bg-white h-fit p-3 rounded-xl outline-4">
              <h2>Skapa ny bössa</h2>
            </div>
          </Link>
        </div>
        <ForeningarDisplay />
      </div>
    </div>
  );
}
