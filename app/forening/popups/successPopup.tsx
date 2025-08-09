"use client";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useRouter } from "next/navigation";

export default function SuccessPopup() {
  const router = useRouter();
  return (
    <DefaultPopup
      popupRef_in="success"
      title="Your content has successfully been updated"
    >
      <button
        className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
        onClick={() => router.back()}
      >
        ok
      </button>
    </DefaultPopup>
  );
}
