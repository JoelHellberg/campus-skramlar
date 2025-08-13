"use client";

import { useState } from "react";
import generator from "generate-password";
import { createClient } from "../../_lib/supabase/supabaseClient";
import DefaultPopup from "@/components/popups/defaultPopup";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function DeletePopup() {
  const router = useRouter();
  const supabase = createClient();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("delete");
  const id = searchParams.get("id");
  const [name, setName] = useState("");

  return (
    <>
      {isActive && (
        <DefaultPopup title="Edit">
          <div className="flex flex-col items-center">
            <h2>Är du säker på att du vill radera bössa {id}?</h2>
            <div className="flex">
              <button className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600 cursor-pointer">
                Ja
              </button>
              <button
                className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-600 cursor-pointer"
                onClick={() => router.back()}
              >
                Nej
              </button>
            </div>
          </div>
        </DefaultPopup>
      )}
    </>
  );
}
