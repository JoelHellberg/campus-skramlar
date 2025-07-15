"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";

export default function Bossa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  // Sammanställning av innehållet som utgör hela sidan
  return (
    <>
      {bossa && (
        <Modal
          onClose={() => {
            router.replace("/", { scroll: false });
          }}
        >
          <h2 className="bg-pink-400 p-20">Bössa nummer: {bossa}</h2>
        </Modal>
      )}
    </>
  );
}
