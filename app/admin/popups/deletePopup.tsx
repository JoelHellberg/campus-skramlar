"use client";

import { useState } from "react";
import { createClient } from "../../_lib/supabase/supabaseClient";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import PopupButton from "@/components/popup/popupButton";
import DefaultPopup from "@/components/popup/defaultPopup";

export default function DeletePopup() {
  const router = useRouter();
  const supabase = createClient();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("delete");
  const id = searchParams.get("id");
  const [name, setName] = useState("");
  const buttons = (
    <>
      <PopupButton className="text-white bg-red-500 hover:bg-red-600">
        Ja
      </PopupButton>
      <PopupButton
        className="text-white bg-green-500 hover:bg-green-600"
        onClick={() => router.back()}
      >
        Nej
      </PopupButton>
    </>
  );

  return (
    <DefaultPopup
      type="Delete"
      title={`Är du säker på att du vill radera bössa ${id}?`}
      param="delete"
      buttons={buttons}
    />
  );
}
