import supabase from "./supabaseClient";
import { BossaDetailed, BossaGeneral, BossaUpdate } from "../types";

// -- user functions

export async function fetchBossorGeneral() {
  const bossorGeneral = await fetchDataTable("bossorGeneral");

  if (!bossorGeneral) {
    throw new Error("Failed to fetch bossorGeneral data.");
  }

  return bossorGeneral;
}

export async function fetchBossaGeneral(
  foreningsId: string
): Promise<BossaGeneral | null> {
  const bossaGeneral = (await fetchDataRow(
    "bossorGeneral",
    foreningsId
  )) as BossaGeneral | null;

  if (!bossaGeneral) {
    console.log("Failed to fetch bossorGeneral data.");
  }
  return bossaGeneral;
}

export async function fetchBossaDetailed(
  foreningsId: string
): Promise<BossaDetailed> {
  const bossaDetailed = (await fetchDataRow(
    "bossorDetailed",
    foreningsId
  )) as BossaDetailed | null;

  if (!bossaDetailed) {
    throw new Error("Failed to fetch bossorGeneral data.");
  }
  return bossaDetailed;
}

export async function fetchBossaUpdates(
  foreningsId: string
): Promise<BossaUpdate[]> {
  const bossaUpdates = (await fetchDataRows(
    "bossorUpdates",
    "forenings_id",
    foreningsId
  )) as BossaUpdate[] | null;

  if (!bossaUpdates) {
    throw new Error("Failed to fetch bossorGeneral data.");
  }
  return bossaUpdates;
}

// -- database functions

async function fetchDataTable(tableName: string) {
  const { data, error } = await supabase.from(tableName).select();

  if (error) {
    console.error(`Error fetching from ${tableName}:`, error.message);
    return null;
  }

  return data;
}

async function fetchDataRow(tableName: string, id: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .eq("id", id)
    .single(); // optional: returns a single object instead of array

  if (error) {
    console.error(`Error fetching from ${tableName}:`, error.message);
    return null;
  }

  return data;
}

export async function fetchDataRows(
  tableName: string,
  idName: string,
  id: string
) {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .eq(idName, id);

  if (error) {
    console.error(`Error fetching from ${tableName}:`, error.message);
    return;
  }
  return data;
}
