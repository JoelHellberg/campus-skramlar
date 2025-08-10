import PiggyBank from "./piggyBank/piggyBank";
import NeedleDot from "./piggyBank/needleDot";
import { createClient } from "@/app/_lib/supabase/supabaseClient";

export default async function PiggyBanks() {
  const supabase = createClient();
  const { data, error } = await supabase.from("bossorGeneral").select();
  if (error || !data) {
    return <h2>Error fetching piggy bank data</h2>;
  }

  return (
    <div id="piggyBanks" className="px-10 py-10">
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
      <div className="flex flex-wrap justify-center gap-12 w-full py-15">
        {data && (
          <>
            {data.map((bossa: any, index: number) => (
              <div key={index} className="w-[30%] py-8">
                <PiggyBank bossa={bossa} position={index} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
