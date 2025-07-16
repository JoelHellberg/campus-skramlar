"use client";
import { useState } from "react";
import { logIn } from "@/app/supabase/accountFunctions";

export default function Home() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col w-full justify-center">
      <label htmlFor="Email:" className="block mb-2 font-medium">
        Email:
      </label>
      <input
        suppressHydrationWarning
        type="text"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter email here"
      />
      <label htmlFor="Email:" className="block mb-2 font-medium">
        Password:
      </label>
      <input
        suppressHydrationWarning
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password here"
      />
      <button
        disabled={email == "" || password == ""}
        className={`px-4 py-2 rounded text-white ${
          email == "" || password == ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 cursor-pointer"
        }`}
        onClick={() => logIn(email, password)}
      >
        Logga in
      </button>
    </div>
  );
}
