"use client";
import { logIn } from "@/app/_lib/supabase/accountFunctions";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useState } from "react";

export default function LogInPopup() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signIn = async () => {
    const status = await logIn(email, password);
    if (status) {
      window.location.href = "/bossor";
    } else {
      setMessage("Failed to sign in!");
    }
  };
  return (
    <DefaultPopup popupRef_in="logIn" title="Sign in" close={false}>
      <p>{message}</p>
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
        onClick={() => signIn()}
      >
        Logga in
      </button>
    </DefaultPopup>
  );
}
