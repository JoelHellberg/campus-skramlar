import { BossaUpdate } from "@/app/_lib/types";

export default function Update(props: { update: BossaUpdate }) {
  console.log("state of props: ", props);
  return (
    <div className="bg-white w-2/3 p-5 rounded-xl my-2 outline-2 border-b-2">
      {/* Symbol & Datum */}
      <div className="flex items-center">
        <h1>!</h1>
        <p>{new Date(props.update.created_at).toISOString().split("T")[0]}</p>
      </div>
      {/* Brödtext */}
      <p className="break-words whitespace-pre-wrap">{props.update.update}</p>
    </div>
  );
}
