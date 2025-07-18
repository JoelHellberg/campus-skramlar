"use client";
import { useEffect, useState } from "react";
import { useBossaData } from "../_lib/data";
import { createPiggybank } from "../_lib/serverFunctions";

export default function Home() {
  const initialize = useBossaData((state) => state.initialize);
  const foreningsId = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  
  const [name, setName] = useState<string>(foreningsNamn);
  const [sum, setSum] = useState<number>(0);
  const [number, setNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
      <h1>profil</h1>
      <div className="flex">
        <div className="bg-white p-5 flex flex-col items-center text-center rounded-full">
          Byt
          <br />
          profilbild
        </div>
        <div className="bg-white p-5">
          <label htmlFor="name" className="block mb-2 font-medium">
            Namn på föreningen:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Skriv namnet här"
          />
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish summa:
          </label>
          <input
            type="number"
            value={sum}
            onChange={(e) => setSum(Number(e.target.value))}
            placeholder="Skriv namnet här"
          />
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish nummer:
          </label>
          <input
            type="tel"
            value={number}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[\d+]*$/.test(value)) {
                setNumber(value);
              }
            }}
            placeholder="Skriv namnet här"
          />
        </div>
      </div>
      <div className="bg-white p-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Bössans beskrivning
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Skriv din beskrivning här..."
          className="w-full p-3 border rounded-lg resize-y"
        />
      </div>
      {foreningsNamn ? (
        <button className={"px-4 py-2 rounded text-white bg-black"}>
          Spara
        </button>
      ) : (
        <button
          className={"px-4 py-2 rounded text-white bg-black"}
          onClick={async () => {
            try {
              await createPiggybank(
                foreningsId,
                name,
                0,
                sum,
                number,
                description
              );
              // e.g. show success message or redirect
            } catch (error) {
              console.error("Failed to create piggy bank:", error);
              // Optionally show a toast or alert
            }
          }}
        >
          Skapa
        </button>
      )}
    </div>
  );
}
