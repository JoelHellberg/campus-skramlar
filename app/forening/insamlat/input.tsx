"use client";

import { useState } from "react";
import { useInsamlatData } from "./data";

type InputProps = {
  moneyAmount_in: number;
};

export default function Input(props: InputProps) {
  const setMoneyAmountZustand = useInsamlatData(
    (state) => state.setMoneyAmount
  );
  const [moneyAmount, setMoneyAmount] = useState(props.moneyAmount_in);
  const setMoneyAmountFunc = (newMoneyAmount: number) => {
    setMoneyAmountZustand(newMoneyAmount);
    setMoneyAmount(newMoneyAmount);
  };
  return (
    <input
      type="number"
      value={moneyAmount !== 0 ? moneyAmount : ""}
      onChange={(e) => setMoneyAmountFunc(Number(e.target.value))}
      placeholder="Ange summa"
      className="bg-white w-100 outline-1 rounded-sm text-6xl my-5 p-3"
    />
  );
}
