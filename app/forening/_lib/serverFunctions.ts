"use server";
import { updateDataTable, insertDataRow } from "./adminFunctions";

export async function createPiggybank(
  foreningsId: string | null,
  foreningsNamn: string,
  moneyCollected: number,
  swishSum: number,
  swishNumber: string,
  description: string
) {
  console.log("createPiggyBank called!");

  console.log("foreningsId: ", foreningsId);
  console.log("foreningsNamn: ", foreningsNamn);

  console.log("moneyCollected: ", moneyCollected);
  console.log("swishSum: ", swishSum);
  console.log("swishNumber: ", swishNumber);
  console.log("description: ", description);

  const isValidInput =
    foreningsId && foreningsNamn && description && swishNumber && swishSum != 0;

  if (isValidInput) {
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
  if (isValidInput) {
    updateDataTable("bossorGeneral", foreningsId, {
      forenings_namn: foreningsNamn,
      pengar_insamlat: moneyCollected,
    });
  }
}

export async function updateBossorDetailed(
  foreningsId: string,
  swishSum: number,
  swishNumber: number,
  description: string
) {
  const isValidInput =
    foreningsId && description && swishSum != 0 && swishNumber != 0;

  if (isValidInput) {
    updateDataTable("bossorDetailed", foreningsId, {
      swish_sum: swishSum,
      phone_number: swishNumber,
      description: description,
    });
  }
}
