"use client";

type Props = {
  id: string;
};
export default function Dropdown(props: Props) {
  return (
    <div className="bg-green-100 mb-4 flex">
      <div className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl cursor-pointer">
        <p>Redigera</p>
      </div>
      <div className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl group cursor-pointer">
        <p className="group-hover:hidden">Ej låst</p>
        <p className="hidden group-hover:block">Lås!</p>
      </div>
      <div className="mx-auto bg-yellow-400 py-2 px-4 rounded-4xl group cursor-pointer">
        <p className="group-hover:hidden">Inte avstängd</p>
        <p className="hidden group-hover:block">Stäng av!</p>
      </div>
    </div>
  );
}
