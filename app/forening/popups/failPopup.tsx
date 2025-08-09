"use client";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useRouter } from "next/navigation";

export default function FailPopup() {
  const router = useRouter();
  return (
    <DefaultPopup
      popupRef_in="fail"
      title="Your content could not be updated"
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
