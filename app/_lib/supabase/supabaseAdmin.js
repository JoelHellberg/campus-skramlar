// app/lib/supabaseAdmin.ts
"use server";
import "server-only";

import { createClient } from "@supabase/supabase-js";

export async function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);
  return supabaseAdmin;
}
