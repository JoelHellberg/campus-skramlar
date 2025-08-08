"use client";
import Link from "next/link";
import ForeningHeader from "../components/foreningHeader";
import { useState } from "react";
import { uploadUpdate } from "../_lib/serverFunctions";
import { useBossaData } from "../_lib/data";

export default function Home() {
  const foreningsId: string = useBossaData((state) => state.foreningsId);
  const [userInput, setUserInput] = useState<string>("");
  const upload = async () => {
    await uploadUpdate(foreningsId, userInput);
  };
  return (
    <div className="flex flex-col items-center bg-[#EDA277] min-h-screen">
      <ForeningHeader />
      <h1>/forening/uppdateringar</h1>
      <div className="bg-white p-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Skriv ditt inlägg nedanför:
        </label>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          id="description"
          name="description"
          rows={5}
          placeholder="Skriv din beskrivning här..."
          className="w-full p-3 border rounded-lg resize-y"
        />
      </div>
      <button
        className={"px-4 py-2 rounded text-white bg-black"}
        onClick={() => upload()}
      >
        Ladda upp
      </button>
    </div>
  );
}
