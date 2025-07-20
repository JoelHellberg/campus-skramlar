"use client";
import { useBossaData } from "../_lib/data";
import { useEffect, useState } from "react";
import { updateBossorGeneral } from "../_lib/serverFunctions";
import ForeningHeader from "../components/foreningHeader";

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
    <div className="flex flex-col items-center bg-[#ACCAB2] min-h-screen text-center gap-10">
      <ForeningHeader />
      <h1>/forening/insamlat</h1>
      <div className="bg-[#FFF0D9] p-10 text-left outline-4 rounded-2xl">
        <label htmlFor="name" className="block mb-2 font-bold text-3xl w-100">
          Ange hur mycket pengar ni har i er bössa nedanför:
        </label>
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(Number(e.target.value))}
          placeholder="Skriv namnet här"
          className="bg-white w-100 outline-1 rounded-sm text-6xl my-5"
        />
      </div>
      <button
        className="px-16 py-3 rounded-xl text-black bg-[#8A8635] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
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
