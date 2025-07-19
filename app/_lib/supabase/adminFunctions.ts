"use server";
import "server-only";
import { getSupabaseAdmin } from "./supabaseAdmin";

export async function fetchDataRow(
  tableName: string,
  idName: string,
  id: string
) {
  const supabaseAdmin = await getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from(tableName)
    .select()
    .eq(idName, id)
    .single();

  if (error) {
    console.error(`Error updating ${tableName}:`, error.message);
    return;
  }
  return data;
}
