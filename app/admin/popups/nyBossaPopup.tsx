"use client";

import { useState } from "react";
import generator from "generate-password";
import { createClient } from "../../_lib/supabase/supabaseClient";
import { useSearchParams } from "next/navigation";
import DefaultPopup from "@/components/popup/defaultPopup";

function generatePassword() {
  const password = generator.generate({
    length: 16,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true,
  });
  return password;
}

export default function NyBossaPopup() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("nyBossa");
  const [name, setName] = useState("");

  const create = async () => {
    if (!name) return;

    // First insert into bossorPrivate
    const { data: privateData, error: privateError } = await supabase
      .from("bossorPrivate")
      .insert([{ forenings_namn: name, password: generatePassword() }])
      .select();

    if (privateError) {
      console.error(
        "Error inserting into bossorPrivate:",
        privateError.message
      );
      return;
    }

    console.log("Inserted into bossorPrivate:", privateData);

    // Optional: get the ID from the first insert if needed
    const privateId = privateData?.[0]?.id;

    // Then insert into bossorDetailed
    const { data: detailedData, error: detailedError } = await supabase
      .from("bossorDetailed")
      .insert([
        {
          id: privateId,
          phone_number: 0,
          swish_sum: 0,
          description: "",
          // Possibly: bossor_private_id: privateId
        },
      ])
      .select();

    if (detailedError) {
      console.error(
        "Error inserting into bossorDetailed:",
        detailedError.message
      );
    } else {
      console.log("Inserted into bossorDetailed:", detailedData);
    }
    window.location.href = "/admin";
  };
  const buttons = (
    <button
      disabled={name == ""}
      className={`px-4 py-2 rounded text-white ${
        name == ""
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600 cursor-pointer"
      }`}
      onClick={() => create()}
    >
      Skapa
    </button>
  );

  return (
    <DefaultPopup
      type="Create"
      param="nyBossa"
      title="Skapa ny bössa"
      buttons={buttons}
      primaryColor="green-400"
    >
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Namn på föreningen:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skriv namnet här"
          className="bg-white"
        />
      </div>
    </DefaultPopup>
  );
}
