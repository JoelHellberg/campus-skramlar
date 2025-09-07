import ButtonMenu from "./buttonMenu";
import { BossaGeneral, BossaPrivate } from "@/app/_lib/types";

type Props = {
  privateData: BossaPrivate;
  generalData: BossaGeneral | null;
};
export default function Dropdown(props: Props) {
  function copyPassword() {
    navigator.clipboard
      .writeText(props.privateData.password)
      .then(() => {
        console.log("Copied to clipboard:", props.privateData.password);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }
  return (
    <>
      <div className="bg-green-100 mb-4 p-2">
        <ButtonMenu
          generalData={props.generalData}
          password={props.privateData.password}
        />
        <div className="w-full bg-green-100 p-2 mb-4 rounded-b-lg">
          <p className="cursor-pointer w-fit group flex" onClick={copyPassword}>
            <span className="font-bold">Password:</span>
            &nbsp;
            <span className="hidden group-hover:block">
              {props.privateData.password}
            </span>
            <span className="block group-hover:hidden">****************</span>
          </p>
        </div>
      </div>
    </>
  );
}
