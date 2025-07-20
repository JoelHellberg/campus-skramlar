"use client";
import { useEffect, useState } from "react";
import { useBossaData } from "../_lib/data";
import {
  createPiggybank,
  updateBossorDetailed,
  updateBossorGeneral,
} from "../_lib/serverFunctions";

export default function Home() {
  const initialize = useBossaData((state) => state.initialize);
  const foreningsId = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  const moneyCollected = useBossaData((state) => state.moneyCollected);
  const swishSum = useBossaData((state) => state.swishSum);
  const swishNumber = useBossaData((state) => state.swishNumber);
  const description_in = useBossaData((state) => state.description);

  const [name, setName] = useState<string>(foreningsNamn);
  const [sum, setSum] = useState<number>(swishSum);
  const [number, setNumber] = useState<string>(swishNumber);
  const [description, setDescription] = useState<string>(description_in);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (foreningsNamn) {
      setName(foreningsNamn);
      setSum(swishSum);
      setNumber(swishNumber);
      setDescription(description_in);
    }
  }, [foreningsNamn]);

  const updateProfile = () => {
    if (name !== foreningsNamn) {
      updateBossorGeneral(foreningsId, foreningsNamn, moneyCollected);
    }
    if (
      sum !== swishSum ||
      number !== swishNumber ||
      description !== description_in
    ) {
      updateBossorDetailed(foreningsId, sum, number, description);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>/forening/profil</h1>
      <div className="flex">
        <div className="bg-[#FFF0D9] p-5 flex flex-col items-center text-center rounded-full">
          Byt
          <br />
          profilbild
        </div>
        <Details
          name={name}
          setNameFunc={setName}
          sum={sum}
          setSumFunc={setSum}
          number={number}
          setNumberFunc={setNumber}
        />
      </div>
      <Description
        description={description}
        setDescriptionFunc={setDescription}
      />
      {foreningsNamn ? (
        <button
          className={"px-4 py-2 rounded text-white bg-black"}
          onClick={() => updateProfile()}
        >
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

type DetailsProps = {
  name: string;
  setNameFunc: (value: string) => void;
  sum: number;
  setSumFunc: (value: number) => void;
  number: string;
  setNumberFunc: (value: string) => void;
};

function Details(props: DetailsProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4">
      <label htmlFor="name" className="block mb-2 font-medium">
        Namn på föreningen:
      </label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setNameFunc(e.target.value)}
        placeholder="Skriv namnet här"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <div className="flex my-4">
        <div className="mr-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish summa:
          </label>
          <input
            type="number"
            value={props.sum}
            onChange={(e) => props.setSumFunc(Number(e.target.value))}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm w-30"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish nummer:
          </label>
          <input
            type="tel"
            value={props.number}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[\d+]*$/.test(value)) {
                props.setNumberFunc(value);
              }
            }}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

type DescriptionProps = {
  description: string;
  setDescriptionFunc: (value: string) => void;
};
function Description(props: DescriptionProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4">
      <label htmlFor="name" className="block mb-2 font-medium">
        Bössans beskrivning
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        value={props.description}
        onChange={(e) => props.setDescriptionFunc(e.target.value)}
        placeholder="Skriv din beskrivning här..."
        className="w-full p-3 border rounded-lg resize-y bg-white"
      />
    </div>
  );
}
