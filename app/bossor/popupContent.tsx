import { useState } from "react";
import generator from "generate-password";
import supabase from "../supabase/supabaseClient";

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

export default function PopupContent() {
  const [name, setName] = useState("");

  const create = async () => {
    if (name) {
      const { data, error } = await supabase
        .from("bossorPrivate")
        .insert([{ forenings_namn: name, password: generatePassword() }])
        .select();

      if (error) {
        console.error("Error inserting:", error.message);
      } else {
        console.log("Inserted data:", data);
      }
    }
  };

  return (
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
        onClick={() => create()}
      >
        Skapa
      </button>
    </div>
  );
}
