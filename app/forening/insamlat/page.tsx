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

  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen text-center">
      <h1>Ange hur mycket pengar ni har i er bössa nedanför:</h1>
      <div className="bg-white p-5 text-left">
        <label htmlFor="name" className="block mb-2 font-medium">
          Summa:
        </label>
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(Number(e.target.value))}
          placeholder="Skriv namnet här"
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
