"use client";
import DefaultPopup from "@/components/popup/defaultPopup";

export default function FailPopup() {
  return (
    <>
      <DefaultPopup
        type="Fail"
        title="Your content could not be updated.."
        param="fail"
      />
    </>
  );
}
