"use client";

import { useState } from "react";
import { useProfileData } from "./data";

type DetailsProps = {
  name_in: string;
  sum_in: number;
  number_in: string;
};

export default function Details(props: DetailsProps) {
  const setNameZustand = useProfileData((state) => state.setForeningsNamn);
  const setSumZustand = useProfileData((state) => state.setSwishSum);
  const setNumberZustand = useProfileData((state) => state.setSwishNumber);
  const [name, setName] = useState(props.name_in);
  const [sum, setSum] = useState(props.sum_in);
  const [number, setNumber] = useState(props.number_in);

  const setNameFunc = (newName: string) => {
    setNameZustand(newName);
    setName(newName);
  };
  const setSumFunc = (newSum: number) => {
    setSumZustand(newSum);
    setSum(newSum);
  };
  const setNumberFunc = (newNumber: string) => {
    setNumberZustand(newNumber);
    setNumber(newNumber);
  };

  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 shadow-xl/25 w-full sm:w-auto">
      <label htmlFor="name" className="block mb-2 font-bold">
        Namn på föreningen:
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameFunc(e.target.value)}
        placeholder="Skriv namnet här"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <div className="flex my-4">
        {/*<div className="mr-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish summa:
          </label>
          <input
            type="number"
            value={sum != 0 ? sum : ""}
            onChange={(e) => setSumFunc(Number(e.target.value))}
            placeholder="Ange summa"
            className="bg-white p-1 outline-1 rounded-sm w-30"
          />
        </div>*/}
        <div className="w-full">
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish nummer:
          </label>
          <input
            type="tel"
            value={number}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[\d+]*$/.test(value)) {
                setNumberFunc(value);
              }
            }}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
