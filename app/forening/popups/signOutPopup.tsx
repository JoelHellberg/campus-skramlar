"use client";
import { deleteSession } from "@/app/_lib/authentication";
import DefaultPopup from "@/components/popup/defaultPopup";
import PopupButton from "@/components/popup/popupButton";
import { useRouter } from "next/navigation";

export default function SignOutPopup() {
  const router = useRouter();
  const signOut = async () => {
    await deleteSession();
    window.location.href = "/forening";
  };
  const buttons = (
    <>
      <PopupButton
        className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
        onClick={signOut}
      >
        Yes
      </PopupButton>
      <PopupButton
        className={"px-4 py-2 rounded text-white bg-black cursor-pointer"}
        onClick={() => router.back()}
      >
        No
      </PopupButton>
    </>
  );
  return (
    <DefaultPopup
      type="Sign Out"
      param="signOut"
      title="Are you sure you want to sign out?"
      buttons={buttons}
    />
  );
}
