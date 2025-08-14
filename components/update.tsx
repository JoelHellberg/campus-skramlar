import { BossaUpdate } from "@/app/_lib/types";

export default function Update(props: { update: BossaUpdate }) {
  return (
    <div className="bg-white w-2/3 p-5 rounded-xl my-2 outline-2 border-b-2">
      {/* Symbol & Datum */}
      <div className="flex font-light text-gray-600 justify-center mb-1">
        <p>{new Date(props.update.created_at).toISOString().split("T")[0]}</p>
      </div>
      {/* Brödtext */}
      <p className="break-words whitespace-pre-wrap font-semibold">{props.update.update}</p>
    </div>
  );
}
