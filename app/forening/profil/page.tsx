import { Suspense } from "react";
import ForeningHeader from "../components/foreningHeader";
import SuccessPopup from "../popups/successPopup";
import FailPopup from "../popups/failPopup";
import Details from "./details";
import Description from "./description";
import Button from "./button";
import ImageSelect from "./imageSelect";
import { BossaDetailed, BossaGeneral } from "@/app/_lib/types";
import {
  fetchBossaDetailed,
  fetchBossaGeneral,
} from "@/app/_lib/supabase/clientFunctions";
import { cookies } from "next/headers";
import { urlExists } from "@/app/_lib/utils";
import ClientLoader from "@/components/loaders/clientLoader";

export default async function Home() {
  const foreningsId = (await cookies()).get("foreningsId")?.value as
    | string
    | undefined;
  const urlDummy = `https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${foreningsId}.png?t=${Date.now()}`;
  const imgUrl = (await urlExists(urlDummy)) ? urlDummy : "";
  var foreningsNamn: string = "";
  var moneyAmount: number = 0;
  var swishSum: number = 0;
  var swishNumber: string = "";
  var description: string = "";

  if (foreningsId) {
    const bossaGeneral: BossaGeneral | null = await fetchBossaGeneral(
      foreningsId
    );
    if (bossaGeneral) {
      const bossaDetailed: BossaDetailed = await fetchBossaDetailed(
        foreningsId
      );

      foreningsNamn = bossaGeneral.forenings_namn;
      moneyAmount = bossaGeneral.pengar_insamlat;
      swishSum = bossaDetailed.swish_sum;
      swishNumber = bossaDetailed.phone_number;
      description = bossaDetailed.description;
    }
  } else {
    return <h2>Error</h2>;
  }

  return (
    <>
      <ClientLoader />
      <Suspense fallback={null}>
        <SuccessPopup />
        <FailPopup />
      </Suspense>
      <div className="flex flex-col items-center">
        <ForeningHeader />
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-[#FFF0D9]">/forening/profil</h1>
          <div className="flex h-52">
            <ImageSelect imgUrl_in={imgUrl} foreningsId_in={foreningsId} />
            <Details
              name_in={foreningsNamn}
              sum_in={swishSum}
              number_in={swishNumber}
            />
          </div>
          <Description description_in={description} />
          <Button
            foreningsId_in={foreningsId}
            foreningsNamn_in={foreningsNamn}
            swishSum_in={swishSum}
            swishNumber_in={swishNumber}
            moneyAmount_in={moneyAmount}
            description_in={description}
          />
        </div>
      </div>
    </>
  );
}
