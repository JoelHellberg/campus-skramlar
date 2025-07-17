import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FFF0D9] min-h-screen">
      <h1>profil</h1>
      <div className="flex">
        <div className="bg-white p-5 flex flex-col items-center text-center rounded-full">
          Byt
          <br />
          profilbild
        </div>
        <div className="bg-white p-5">
          <label htmlFor="name" className="block mb-2 font-medium">
            Namn på föreningen:
          </label>
          <input type="text" placeholder="Skriv namnet här" />
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish summa:
          </label>
          <input type="text" placeholder="Skriv namnet här" />
          <label htmlFor="name" className="block mb-2 font-medium">
            Swish nummer:
          </label>
          <input type="text" placeholder="Skriv namnet här" />
        </div>
      </div>
      <div className="bg-white p-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Bössans beskrivning
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Skriv din beskrivning här..."
          className="w-full p-3 border rounded-lg resize-y"
        />
      </div>
      <button className={"px-4 py-2 rounded text-white bg-black"}>Skapa</button>
    </div>
  );
}
