"use client";

import { useState } from "react";
import generator from "generate-password";
import { createClient } from "../../_lib/supabase/supabaseClient";
import DefaultPopup from "@/components/defaultPopup";
import { useSearchParams } from "next/navigation";

export default function EditPopup() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("edit");
  const [name, setName] = useState("");

  return (
    <>
      {isActive && (
        <DefaultPopup title="Edit">
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="block mb-2 font-medium">
              Namn på föreningen:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Skriv namnet här"
            />
            <button
              disabled={name == ""}
              className={`px-4 py-2 rounded text-white ${
                name == ""
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 cursor-pointer"
              }`}
            >
              Skapa
            </button>
          </div>
        </DefaultPopup>
      )}
    </>
  );
}
