"use client";
import { useState } from "react";

export default function Home() {
  const [moneyAmount, setMoneyAmount] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const updateMoneyAmount = () => {
    setStatus("Updated");
  };
  return (
    <div>
      <input
        type="text"
        value={moneyAmount}
        id="moneyAmount"
        onChange={(e) => setMoneyAmount(e.target.value)}
        placeholder="Enter money amount"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <input
        type="text"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter robot password"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <button onClick={updateMoneyAmount} className="bg-pink-400 w-full">
        Upload
      </button>
      <p>{status}</p>
    </div>
  );
}
