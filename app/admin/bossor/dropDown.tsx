"use client";

import Link from "next/link";

type Props = {
  id: string;
  isActive: boolean;
};
export default function Dropdown(props: Props) {
  return (
    <>
      {props.isActive && (
        <div className="bg-green-100 mb-4 flex">
          <Link
            className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl group cursor-pointer"
            href={`/admin/?edit=true&id=${props.id}`}
          >
            <p>Redigera</p>
          </Link>
          <div className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl group cursor-pointer">
            <p className="group-hover:hidden">Ej låst</p>
            <p className="hidden group-hover:block">Lås!</p>
          </div>
          <div className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl group cursor-pointer">
            <p className="group-hover:hidden">Inte avstängd</p>
            <p className="hidden group-hover:block">Stäng av!</p>
          </div>
        </div>
      )}
    </>
  );
}
