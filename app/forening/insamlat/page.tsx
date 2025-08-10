import { Suspense } from "react";
import ForeningHeader from "../components/foreningHeader";
import Loading from "@/components/loading";
import SuccessPopup from "../popups/successPopup";
import FailPopup from "../popups/failPopup";
import Input from "./input";
import Button from "./button";
import { cookies } from "next/headers";
import { BossaGeneral } from "@/app/_lib/types";
import { fetchBossaGeneral } from "@/app/_lib/supabase/clientFunctions";

export default async function Home() {
  const foreningsId = (await cookies()).get("foreningsId")?.value as
    | string
    | undefined;
  var foreningsNamn: string = "";
  var moneyAmount: number = 0;

  if (foreningsId) {
    const bossaGeneral: BossaGeneral | null = await fetchBossaGeneral(
      foreningsId
    );
    if (bossaGeneral) {
      foreningsNamn = bossaGeneral.forenings_namn;
      moneyAmount = bossaGeneral.pengar_insamlat;
    }
  } else {
    return <h2>Error</h2>;
  }

  return (
    <>
      <Loading />
      <Suspense fallback={null}>
        <SuccessPopup />
        <FailPopup />
      </Suspense>
      <div className="flex flex-col items-center bg-[#ACCAB2] min-h-screen text-center gap-10">
        <ForeningHeader />
        <h1 className="text-[#FFF0D9]">/forening/insamlat</h1>
        <div className="bg-[#FFF0D9] p-10 text-left outline-4 rounded-2xl shadow-xl/25">
          <label htmlFor="name" className="block mb-2 font-bold text-3xl w-100">
            Ange hur mycket pengar ni har i er bössa nedanför:
          </label>
          <Input moneyAmount_in={moneyAmount} />
        </div>
        <Button
          foreningsId_in={foreningsId}
          foreningsNamn_in={foreningsNamn}
          moneyAmount_in={moneyAmount}
        />
      </div>
    </>
  );
}
