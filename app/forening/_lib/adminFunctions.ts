"use server";
import "server-only";
import { getSupabaseAdmin } from "@/app/_lib/supabase/supabaseAdmin";

export async function updateDataTable<T extends object>(
  tableName: string,
  foreningsId: string,
  data: T
) {
  const supabaseAdmin = await getSupabaseAdmin();
  const { error } = await supabaseAdmin
    .from(tableName)
    .update(data)
    .eq("id", foreningsId);

  if (error) {
    console.error(`Error updating ${tableName}:`, error.message);
    return;
  }
}

export async function insertDataRow<T extends object>(
  tableName: string,
  data: T
) {
  const supabaseAdmin = await getSupabaseAdmin();
  const { data: detailedData, error: detailedError } = await supabaseAdmin
    .from(tableName)
    .insert(data);

  if (detailedError) {
    console.error(
      "Error inserting into bossorDetailed:",
      detailedError.message
    );
  } else {
    console.log("Inserted into bossorDetailed:", detailedData);
  }
}
