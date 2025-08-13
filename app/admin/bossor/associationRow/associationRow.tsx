import { BossaGeneral, BossaPrivate } from "@/app/_lib/types";
import ButtonMenu from "./buttonMenu";
import { createClient } from "@/app/_lib/supabase/supabaseClient";
import { fetchBossaGeneral } from "@/app/_lib/supabase/clientFunctions";
import Dropdown from "./dropDown";
import InteractiveRow from "./interactiveRow";

type Props = {
  isActive: boolean;
  privateData: BossaPrivate;
};
export default async function AssociationRow(props: Props) {
  const generalData: BossaGeneral | null = await fetchBossaGeneral(
    props.privateData.id
  );
  return (
    <div className="w-4/5 bg-gray-200/20 p-2 my-2 rounded-xl">
      <InteractiveRow privateData={props.privateData} generalData={generalData}>
        <div className="w-1/3 text-center">
          <p>{props.privateData.id}</p>
        </div>
        <div className="w-1/3 text-center">
          <p>{props.privateData.forenings_namn}</p>
        </div>
        <div className="w-1/3 text-center">
          <p>{generalData?.forenings_namn}</p>
        </div>
      </InteractiveRow>
    </div>
  );
}
