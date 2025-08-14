"use client";
import { createSession } from "@/app/_lib/authentication";
import DefaultPopup from "@/components/popup/defaultPopup";
import { useState } from "react";

export default function LogInPopup() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signIn = async () => {
    const foreningsId = (await createSession(password)) as string | null;
    if (foreningsId) {
      window.location.href = "/forening";
    } else {
      setMessage("Failed to sign in!");
    }
  };
  const button_out = (
    <button
      className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
      onClick={signIn}
    >
      logga in
    </button>
  );
  return (
    <DefaultPopup
      type="Alert"
      title="Sign in!"
      buttons={button_out}
      close={false}
      primaryColor="yellow-400"
      secondaryColor="green-400"
    >
      <p>{message}</p>
      <input
        suppressHydrationWarning
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password here"
        className="bg-white"
      />
    </DefaultPopup>
  );
}
