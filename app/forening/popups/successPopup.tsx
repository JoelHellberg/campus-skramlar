"use client";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useRouter, useSearchParams } from "next/navigation";

export default function SuccessPopup() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("success");
  const router = useRouter();
  return (
    <>
      {isActive && (
        <DefaultPopup title="Your content has successfully been updated">
          <button
            className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
            onClick={() => router.back()}
          >
            ok
          </button>
        </DefaultPopup>
      )}
    </>
  );
}
