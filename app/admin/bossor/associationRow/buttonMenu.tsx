"use client";

import { updateDataTableRow } from "../../_lib/functions";
import { BossaGeneral } from "@/app/_lib/types";
import { useRouter } from "next/navigation";

type Props = {
  generalData: BossaGeneral | null;
  nickname: string;
  password: string;
};
export default function ButtonMenu(props: Props) {
  const router = useRouter();

  function copyInstructions() {
    const instructions = `Hej ${props.nickname}!
    \nNi kan nu även publicera er insamling på Campus Skramlars hemsida, för att göra detta går ni till \n"https://campusskramlar.se/forening" och loggar in med lösenordet: "${props.password}".
    \nOm ni har några frågor är ni mer än välkomna att skriva här eller höra av er till mig direkt.
    \nVänliga hälsningar Joel Hellberg - Webbansvarig i Campus Skramlar`;
    navigator.clipboard
      .writeText(instructions)
      .then(() => {
        console.log("Copied to clipboard:", instructions);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }
  function toggleBanned() {
    if (props.generalData) {
      props.generalData.banned = !props.generalData.banned;
      updateDataTableRow(
        "bossorGeneral",
        "id",
        props.generalData.id,
        props.generalData
      );
      router.refresh();
    }
  }
  return (
    <div className="flex items-center my-2 gap-5">
      {props.generalData && (
        <>
          {/*<Link
            className="bg-white shadow-2xs py-2 px-4 rounded-4xl group cursor-pointer"
            href={`/admin/?delete=true&id=${props.generalData.id}`}
          >
            <p>Radera</p>
          </Link>
          <Link
            className="bg-yellow-200 py-2 px-4 rounded-4xl group cursor-pointer"
            href={`/admin/?edit=true&id=${props.generalData.id}`}
          >
            <p>Redigera</p>
          </Link>
          <div className="bg-green-200 hover:bg-red-400 py-2 px-4 rounded-4xl group cursor-pointer">
            <p className="group-hover:hidden">Ej låst</p>
            <p className="hidden group-hover:block">Lås!</p>
          </div>*/}
          {props.generalData.banned ? (
            <div className="bg-red-200 hover:bg-green-400 py-2 px-4 rounded-4xl group cursor-pointer">
              <p className="group-hover:hidden">Bannad</p>
              <p className="hidden group-hover:block" onClick={toggleBanned}>
                Avbanna!
              </p>
            </div>
          ) : (
            <div className="bg-green-200 hover:bg-red-400 py-2 px-4 rounded-4xl group cursor-pointer">
              <p className="group-hover:hidden">Inte bannad</p>
              <p className="hidden group-hover:block" onClick={toggleBanned}>
                Banna!
              </p>
            </div>
          )}
        </>
      )}
      <div
        className="bg-blue-200 py-2 px-4 rounded-4xl group cursor-pointer hover:outline-4 hover:outline-blue-200 hover:bg-white"
        onClick={() => copyInstructions()}
      >
        <p>Vidarebefodra</p>
      </div>
    </div>
  );
}
