import ForeningHeader from "../components/foreningHeader";
import Update from "@/components/popups/update";
import { BossaUpdate } from "@/app/_lib/types";
import { fetchBossaUpdates } from "@/app/_lib/supabase/clientFunctions";
import LayoutLoader from "@/components/loaders/layoutLoader";
import Input from "./input";
import Button from "./button";
import { cookies } from "next/headers";
import ClientLoader from "@/components/loaders/clientLoader";

export default async function Home() {
  const foreningsId = (await cookies()).get("foreningsId")?.value as
    | string
    | undefined;
  var updates: BossaUpdate[];

  if (foreningsId) {
    updates = await fetchBossaUpdates(foreningsId);
  } else {
    return <h2>Error</h2>;
  }
  return (
    <>
      <ClientLoader />
      <div className="flex flex-col items-center bg-[#EDA277] h-screen gap-10">
        <ForeningHeader />
        <h1 className="text-[#FFF0D9]">/forening/uppdateringar</h1>
        <div className="flex items-center justify-center gap-20 w-3/5 h-3/5">
          <div className="flex flex-col items-center gap-10">
            <div className="bg-[#FFF0D9] p-10 rounded-2xl outline-4 shadow-xl/25">
              <label htmlFor="name" className="block mb-2 font-bold text-3xl">
                Skriv ditt inlägg nedanför:
              </label>
              <Input />
            </div>
            <Button foreningsId_in={foreningsId} />
          </div>
          <div className="bg-[#FFF0D9] pt-10 outline-4 rounded-2xl rounded-r-sm shadow-xl/25 overflow-y-auto flex flex-col items-center w-2/6 h-full">
            {updates && updates.length > 0 ? (
              updates?.map((update: BossaUpdate, index: number) => (
                <Update key={index} update={update} />
              ))
            ) : (
              <Update
                update={{
                  forening_id: "",
                  created_at: new Date(Date.now()),
                  update:
                    "(Här kommer du kunna se dina olika uppdateringar!)\n\nGör en uppdatering och se vet ja! :)",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
