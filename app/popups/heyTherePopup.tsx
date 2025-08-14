"use client";
import { useRouter, useSearchParams } from "next/navigation";
import DefaultPopup from "@/components/defaultPopup";

export default function HeyTherePopup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("heythere");
  const closePopup = () => {
    router.back();
  };
  const redirectUser = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  return (
    <>
      {bossa && (
        <DefaultPopup title={`Warning`}>
          <div className="h-full w-full">
            <h2>Hörru!</h2>
            <p>
              Istället för att försöka ta ner vårat papper så kan du hjälpa till
              genom att antingen delta i någon av bössorna, panta burkar
              och/eller hålla i någon slags aktivitet. Gå gärna ihop en grupp
              och gör något gemensamt!{" "}
            </p>
            <div className="flex">
              <button
                className="bg-pink-400 w-40 p-2 aspect-video cursor-pointer rounded"
                onClick={closePopup}
              >
                Okej jag förstår
              </button>
              <button
                className="bg-blue-400 w-40 p-2 aspect-video cursor-pointer rounded"
                onClick={redirectUser}
              >
                Jag kommer göra det igen!
              </button>
            </div>
          </div>
        </DefaultPopup>
      )}
    </>
  );
}
