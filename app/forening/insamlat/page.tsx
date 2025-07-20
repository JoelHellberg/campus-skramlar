"use client";
import { useBossaData } from "../_lib/data";
import { useEffect, useState } from "react";
import { updateBossorGeneral } from "../_lib/serverFunctions";

export default function Home() {
  const initialize = useBossaData((state) => state.initialize);
  const foreningsId = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  const moneyCollected = useBossaData((state) => state.moneyCollected);
  const [sum, setSum] = useState(moneyCollected);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (moneyCollected) {
      setSum(moneyCollected);
    }
  }, [moneyCollected]);

  return (
    <div className="flex flex-col items-center bg-[#ACCAB2] min-h-screen text-center">
      <h1>/forening/insamlat</h1>
      <div className="bg-[#FFF0D9] p-5 text-left outline-4 rounded-2xl">
        <label htmlFor="name" className="block mb-2 font-medium">
          Ange hur mycket pengar ni har i er bössa nedanför:
        </label>
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(Number(e.target.value))}
          placeholder="Skriv namnet här"
          className="bg-white w-full outline-1 rounded-sm"
        />
      </div>
      <button
        className={"px-4 py-2 rounded text-white bg-black"}
        onClick={async () => {
          try {
            await updateBossorGeneral(foreningsId, foreningsNamn, sum);
          } catch (error) {
            console.error("Failed to create piggy bank:", error);
          }
        }}
      >
        Spara
      </button>
    </div>
  );
}
