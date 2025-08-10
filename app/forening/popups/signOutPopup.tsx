"use client";
import { deleteSession } from "@/app/_lib/authentication";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignOutPopup() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("signOut");
  const router = useRouter();
  const signOut = async () => {
    await deleteSession();
    window.location.href = "/forening";
  };
  return (
    <>
      {isActive && (
        <DefaultPopup title="Are you sure you want to sign out?">
          <button
            className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
            onClick={signOut}
          >
            Yes
          </button>
          <button
            className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
            onClick={() => router.back()}
          >
            No
          </button>
        </DefaultPopup>
      )}
    </>
  );
}
