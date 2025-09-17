"use server";
import { updateDataTable, insertDataRow } from "./adminFunctions";
import { checkAuthentication } from "@/app/_lib/supabase/adminFunctions";

export async function createPiggybank(
  foreningsId: string,
  foreningsNamn: string,
  moneyCollected: number,
  swishSum: number,
  swishNumber: string,
  description: string
) {
  const isValidInput =
    foreningsId && foreningsNamn && description && swishNumber && swishSum != 0;
  const isAuthenticated = await checkAuthentication(foreningsId);

  if (isAuthenticated && isValidInput) {
    updateDataTable("bossorPrivate", foreningsId, { active: true });
    insertDataRow("bossorGeneral", {
      id: foreningsId,
      forenings_namn: foreningsNamn,
      pengar_insamlat: moneyCollected,
    });
    updateDataTable("bossorDetailed", foreningsId, {
      swish_sum: swishSum,
      phone_number: swishNumber,
      description: description,
    });
  }
}

export async function updateBossorGeneral(
  foreningsId: string,
  foreningsNamn: string,
  moneyCollected: number
) {
  const isValidInput = foreningsId && foreningsNamn && moneyCollected != 0;
  const isAuthenticated = await checkAuthentication(foreningsId);

  if (isAuthenticated && isValidInput) {
    updateDataTable("bossorGeneral", foreningsId, {
      forenings_namn: foreningsNamn,
      pengar_insamlat: moneyCollected,
    });
  }
}

export async function updateBossorDetailed(
  foreningsId: string,
  swishSum: number,
  swishNumber: string,
  description: string
) {
  const isValidInput = foreningsId && description && swishNumber;
  const isAuthenticated = await checkAuthentication(foreningsId);
  console.log("SERVERLOG: Trying to update bossa");
  console.log("SERVERLOG: isAuthenticated: ", isAuthenticated);
  console.log("SERVERLOG: isValidInput: ", isValidInput);
  console.log("SERVERLOG: foreningsId: ", foreningsId);
  console.log("SERVERLOG: foreningsId: ", description);
  console.log("SERVERLOG: swishNumber: ", swishNumber);
  if (isAuthenticated && isValidInput) {
    console.log("SERVERLOG: Is updating bossa");
    updateDataTable("bossorDetailed", foreningsId, {
      swish_sum: swishSum,
      phone_number: swishNumber,
      description: description,
    });
  }
}

export async function uploadUpdate(foreningsId: string, updateContent: string) {
  const isValidInput = foreningsId && updateContent;
  const isAuthenticated = await checkAuthentication(foreningsId);
  if (isAuthenticated && isValidInput) {
    await insertDataRow("bossorUpdates", {
      forenings_id: foreningsId,
      update: updateContent,
    });
  }
}
