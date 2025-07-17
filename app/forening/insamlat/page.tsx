import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen text-center">
      <h1>Ange hur mycket pengar ni har i er bössa nedanför:</h1>
      <div className="bg-white p-5 text-left">
        <label htmlFor="name" className="block mb-2 font-medium">
          Summa:
        </label>
        <input type="number" placeholder="Skriv namnet här" />
      </div>
      <button className={"px-4 py-2 rounded text-white bg-black"}>Skapa</button>
    </div>
  );
}
