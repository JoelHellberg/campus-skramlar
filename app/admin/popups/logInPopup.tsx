"use client";
import { login } from "@/app/_lib/supabase/accountFunctions";
import DefaultPopup from "@/components/popup/defaultPopup";
import InputPopup from "@/components/popup/defaultPopup";
import { useState } from "react";

export default function LogInPopup() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signIn = async () => {
    const status = await login(email, password);
    if (status) {
      window.location.href = "/admin";
    } else {
      setMessage("Failed to sign in!");
    }
  };
  const buttons = (
    <button
      disabled={email == "" || password == ""}
      className={`px-4 py-2 rounded text-white ${
        email == "" || password == ""
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600 cursor-pointer"
      }`}
      onClick={() => signIn()}
    >
      Logga in
    </button>
  );
  return (
    <DefaultPopup
      type="Alert"
      title="Sign in!"
      buttons={buttons}
      close={false}
      primaryColor="yellow-400"
      secondaryColor="green-400"
    >
      <p>{message}</p>
      <div>
        <label htmlFor="Email:" className="block mb-2 font-medium">
          Email:
        </label>
        <input
          suppressHydrationWarning
          type="text"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter email here"
          className="bg-white"
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
          className="bg-white"
        />
      </div>
    </DefaultPopup>
  );
}
