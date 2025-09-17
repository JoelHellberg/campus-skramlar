import PiggyBank from "./piggyBank/piggyBank";
import NeedleDot from "./piggyBank/needleDot";
import { createClient } from "@/app/_lib/supabase/supabaseClient";
import { BossaGeneral } from "@/app/_lib/types";
import React from "react";

export const revalidate = 0;

export default async function PiggyBanks() {
  const supabase = createClient();
  const { data, error } = await supabase.from("bossorGeneral").select();
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
          <h3 className="!text-7xl my-5">Bössor</h3>
        </div>
        {/* Div runt nålen så vi kan veta när alla nålar försvunnit */}
        <NeedleDot />
      </div>

      {/* "Underrubrik" */}
      <div className="w-full flex items-center justify-center text-center text-[#707070] mt-4">
        <h3 className="!text-4xl">(Klicka på en bössa för att se mer)</h3>
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
    </div>
  );
}
