"use client";
import Link from "next/link";
import ForeningHeader from "../components/foreningHeader";
import { Suspense, useEffect, useState, useTransition } from "react";
import { uploadUpdate } from "../_lib/serverFunctions";
import { useBossaData } from "../_lib/data";
import Update from "@/components/popups/bossa/update";
import { BossaUpdate } from "@/app/_lib/types";
import { fetchBossaUpdates } from "@/app/_lib/supabase/clientFunctions";
import LoadingSimple from "@/components/loadingSimple";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";


export default function Home() {
  const foreningsId: string = useBossaData((state) => state.foreningsId);
  const initialize = useBossaData((state) => state.initialize);
  const [userInput, setUserInput] = useState<string>("");
  const [updates, setUpdates] = useState<BossaUpdate[]>();
  useEffect(() => {
    initialize();
  }, []);
  const fetchUpdates = async () => {
    const data: BossaUpdate[] = await fetchBossaUpdates(foreningsId);
    setUpdates(data);
  };
  useEffect(() => {
    console.log("(in Effect) foreningsId is: ", foreningsId);
    if (foreningsId) {
      fetchUpdates();
    }
  }, [foreningsId]);
  const [isPending, startTransition] = useTransition();
  const upload = async () => {
    startTransition(async () => {
      await uploadUpdate(foreningsId, userInput);
      await fetchUpdates();
    });
  };
  return (
    <>
      <Loading />
      {isPending && <LoadingSimple />}
      <div className="flex flex-col items-center bg-[#EDA277] h-screen gap-10">
        <ForeningHeader />
        <h1 className="text-[#FFF0D9]">/forening/uppdateringar</h1>
        <div className="flex items-center justify-center gap-20 w-3/5 h-3/5">
          <div className="flex flex-col items-center gap-10">
            <div className="bg-[#FFF0D9] p-10 rounded-2xl outline-4 shadow-xl/25">
              <label htmlFor="name" className="block mb-2 font-bold text-3xl">
                Skriv ditt inlägg nedanför:
              </label>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                id="description"
                name="description"
                rows={5}
                placeholder="Skriv din beskrivning här..."
                className="bg-white w-full p-3 my-5 border rounded-lg resize-y"
              />
            </div>
            <button
              className="px-16 py-3 rounded-xl text-black bg-[#ACCAB2] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
              onClick={() => upload()}
            >
              Ladda upp
            </button>
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
