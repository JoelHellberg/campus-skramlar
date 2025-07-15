export default function Update() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] w-2/3 p-2 rounded-xl my-2">
      {/* Symbol & Datum */}
      <div className="flex items-center">
        <h1>!</h1>
        <p>YYYY-MM-DD</p>
      </div>
      {/* Brödtext */}
      <p>
        Här kan olika föreningar skriva sina uppdateringar för kommande event.
      </p>
    </div>
  );
}
