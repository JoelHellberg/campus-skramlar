import { BossaGeneral, BossaPrivate } from "@/app/_lib/types";
import ButtonMenu from "./buttonMenu";
import { createClient } from "@/app/_lib/supabase/supabaseClient";
import { fetchBossaGeneral } from "@/app/_lib/supabase/clientFunctions";

type Props = {
  isActive: boolean;
  privateData: BossaPrivate;
};
export default async function AssociationRow(props: Props) {
  const generalData: BossaGeneral | null = await fetchBossaGeneral(
    props.privateData.id
  );
  return (
    <div className="w-full bg-gray-200/20 p-2 my-2 rounded-xl">
      {generalData && (
        <ButtonMenu
          generalData={generalData}
          password={props.privateData.password}
        />
      )}
      <div
        className={
          "shadow-sm py-5 rounded-lg flex w-full " +
          (props.isActive ? "bg-green-300/70" : "bg-yellow-200/70")
        }
      >
        <div className="w-1/3 text-center">
          <p>{props.privateData.id}</p>
        </div>
        <div className="w-1/3 text-center">
          <p>{props.privateData.forenings_namn}</p>
        </div>
        <div className="w-1/3 text-center">
          <p>{generalData?.forenings_namn}</p>
          {/*<p>{props.privateData.password}</p>*/}
        </div>
      </div>
      <div className="w-full bg-green-100 p-2 mb-4 rounded-b-lg">
        <p>
          <span className="font-bold">Password:</span>{" "}
          {props.privateData.password}
        </p>
      </div>
    </div>
  );
}
