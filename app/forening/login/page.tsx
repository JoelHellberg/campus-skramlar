"use client";
import { createSession } from "@/app/_lib/authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const signIn = async () => {
    const foreningsId = (await createSession(password)) as string | null;
    if (foreningsId) {
      localStorage.setItem("foreningsId", foreningsId);
      router.push("/forening");
    }
    else {
      setMessage("Failed to sign in!")
    }
  };
  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen text-center">
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
    </div>
  );
}
