import Link from "next/link";
import ForeningHeader from "../components/foreningHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#EDA277] min-h-screen">
      <ForeningHeader/>
      <h1>/forening/uppdateringar</h1>
      <div className="bg-white p-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Skriv ditt inlägg nedanför:
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Skriv din beskrivning här..."
          className="w-full p-3 border rounded-lg resize-y"
        />
      </div>
      <button className={"px-4 py-2 rounded text-white bg-black"}>Ladda upp</button>
    </div>
  );
}
