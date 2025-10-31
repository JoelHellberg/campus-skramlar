import { createClient } from "../../_lib/supabase/supabaseClient";

export async function updateDataTableRow<T extends object>(
  tableName: string,
  idName: string,
  id: string,
  data: T
) {
  const supabase = createClient();
  const { error } = await supabase.from(tableName).update(data).eq(idName, id);

  if (error) {
    console.error(`Error updating ${tableName}:`, error.message);
    return;
  }
}
