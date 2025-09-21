import PiggyBank from "./piggyBank/piggyBank";
import NeedleDot from "./piggyBank/needleDot";
import { createClientNoCache } from "@/app/_lib/supabase/supabaseClient";
import { BossaGeneral } from "@/app/_lib/types";
import React from "react";

export const revalidate = 0;

export default async function PiggyBanks() {
  const supabase = createClientNoCache();

  const { data, error } = await supabase
    .from("bossorGeneral")
    .select("*")
    .limit(1000);
  const piggyBankList = data as BossaGeneral[] | undefined;
  if (error || !piggyBankList) {
    return <h2>Error fetching piggy bank data</h2>;
  }

  return (
    <div id="piggyBanks" className="px-5 sm:px-10 py-10">
      <div className="flex">
        <NeedleDot />
        {/* Rubrik */}
        <div className="flex grow items-center justify-center text-center">
          <h3 className="!text-6xl sm:!text-7xl my-5">Insamlingar</h3>
        </div>
        {/* Div runt nålen så vi kan veta när alla nålar försvunnit */}
        <NeedleDot />
      </div>

      {/* "Underrubrik" */}
      <div className="w-full flex items-center justify-center text-center text-[#707070] mt-4">
        <h3 className="!text-4xl">(Klicka på en insamling för att se mer)</h3>
      </div>
      {/* Positionering av alla bössor */}
      <div className="flex flex-wrap justify-center gap-y-12 w-full py-15">
        {piggyBankList && (
          <>
            {piggyBankList.map((bossa: BossaGeneral, index: number) => (
              <React.Fragment key={index}>
                {!bossa.banned && (
                  <div
                    key={index}
                    className="w-[100%] md:w-[45%] xl:w-[30%] py-8 mx-auto"
                  >
                    <PiggyBank bossa={bossa} position={index} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <div className="w-full flex justify-center">
        <h3 className="w-11/12 sm:w-5/6 xl:w-2/3 text-center text-xl sm:!text-3xl text-gray-500">
          Hittar ni ingen insamling som faller er i smaken men ändå vill hjälpa
          till får ni jättegärna donera direkt till{" "}
          <a
            href="https://bossan.musikhjalpen.se/campus-skramlar/?fbclid=IwY2xjawM4erxleHRuA2FlbQIxMQABHvDl0JnTLAEg_raoMjV_e4IcmzRXNMjFlPeZIhBlLsN6XWVEJD2hW0P5Y7mD_aem_3MIExDXONNPb9ryzRch5sQ"
            className="underline italic text-blue-400"
          >
            vår bössa på musikhjälpen!
          </a>
        </h3>
      </div>
    </div>
  );
}
