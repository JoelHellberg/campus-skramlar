"use client";
import DefaultPopup from "@/components/defaultPopup";
import { useRouter, useSearchParams } from "next/navigation";

export default function FailPopup() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("fail");
  const router = useRouter();
  return (
    <>
      {isActive && (
        <DefaultPopup title="Your content could not be updated">
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
