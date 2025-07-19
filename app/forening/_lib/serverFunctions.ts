"use server";
import { verifySession } from "@/app/_lib/authentication";
import { updateDataTable, insertDataRow } from "./adminFunctions";

async function checkAuthentication(foreningsId: string): Promise<boolean> {
  const sessionForeningsId = await verifySession();
  // If the session is correct and the user has supplied the correct id,
  // then they are correctly authenticated
  if (sessionForeningsId && sessionForeningsId == foreningsId) {
    return true;
  }
  return false;
}

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
  const isValidInput =
    foreningsId && description && swishNumber && swishSum != 0;
  const isAuthenticated = await checkAuthentication(foreningsId);

  if (isAuthenticated && isValidInput) {
    updateDataTable("bossorDetailed", foreningsId, {
      swish_sum: swishSum,
      phone_number: swishNumber,
      description: description,
    });
  }
}
