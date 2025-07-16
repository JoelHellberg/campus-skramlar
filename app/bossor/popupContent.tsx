import { useState } from "react";

export default function PopupContent() {
  const [name, setName] = useState("");

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
      >
        Skapa
      </button>
    </div>
  );
}
