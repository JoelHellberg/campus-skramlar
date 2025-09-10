"use client";
import { useRouter, useSearchParams } from "next/navigation";
import PopupButton from "@/components/popup/popupButton";
import DefaultPopup from "@/components/popup/defaultPopup";

export default function HeyTherePopup() {
  const router = useRouter();
  const closePopup = () => {
    router.back();
  };
  const redirectUser = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };
  const buttons = (
    <>
      <PopupButton
        className="bg-green-400 hover:bg-green-200"
        onClick={closePopup}
      >
        {/*Okej, jag förstår!*/}
        Fett!
      </PopupButton>
      {/*<PopupButton
        className="bg-white outline-black hover:bg-red-500 hover:text-white"
        onClick={redirectUser}
      >
        Jag kommer göra det igen!!
      </PopupButton>*/}
    </>
  );

  return (
    <DefaultPopup
      type="Warning"
      //title="Hörru!"
      title="Snyggt!"
      param="heythere"
      buttons={buttons}
      primaryColor="yellow-400"
      secondaryColor="red-400"
    >
      {/*<p className="w-3/5 text-center font-semibold">
        Istället för att försöka ta ner vårat papper så kan du hjälpa till genom
        att antingen delta i någon av bössorna, panta burkar och/eller hålla i
        någon slags aktivitet. Gå gärna ihop en grupp och gör något gemensamt!
        {" :)"}
      </p>*/}
      <p className="w-3/5 text-center font-semibold">
        Du har hittat hemsidans easter egg, skriv "Hejsan svejsan hoppsan
        dejsan" till oss på instagram. (Den första som skriver detta till oss
        vinner ett pris!!)
        {" :)"}
      </p>
    </DefaultPopup>
  );
}
