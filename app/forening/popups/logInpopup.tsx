"use client";
import { createSession } from "@/app/_lib/authentication";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LogInPopup() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("logIn");
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
  return (
    <>
      {isActive && (
        <DefaultPopup title="Alert" close={false}>
          <p>{message}</p>
          <input
            suppressHydrationWarning
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here"
          />
          <button
            className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
            onClick={signIn}
          >
            logga in
          </button>
        </DefaultPopup>
      )}
    </>
  );
}
