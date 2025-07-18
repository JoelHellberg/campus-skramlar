"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const signIn = () => {
    localStorage.setItem("foreningsId", "4");
    router.push("/forening");
  };
  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen text-center">
      <button
        className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
        onClick={signIn}
      >
        logga in
      </button>
    </div>
  );
}
