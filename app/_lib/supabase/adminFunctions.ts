"use server";
import "server-only";
import { getSupabaseAdmin } from "./supabaseAdmin";
import { verifySession } from "../authentication";

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

export async function checkAuthentication(foreningsId: string): Promise<boolean> {
  const sessionForeningsId = await verifySession();
  // If the session is correct and the user has supplied the correct id,
  // then they are correctly authenticated
  if (sessionForeningsId && sessionForeningsId == foreningsId) {
    return true;
  }
  return false;
}

export async function uploadBufferToSupabase({
  buffer,
  bucket,
  fileName,
  folder,
  foreningsId,
}: {
  buffer: Buffer;
  bucket: string;
  fileName: string;
  folder?: string;
  foreningsId: string;
}) {
  const supabaseAdmin = await getSupabaseAdmin();
  const storage = supabaseAdmin.storage;

  const fileExtension = fileName.split(".").pop() || "png";
  const path = `${folder ? folder + "/" : ""}${foreningsId}.${fileExtension}`;

  const { data, error } = await storage.from(bucket).upload(path, buffer, {
    upsert: true,
    contentType: `image/${fileExtension}`,
  });

  console.log("Upload error:", error);
console.log("Upload data:", data);

  if (error) {
    return { imageUrl: "", error: "Upload failed" };
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${data.path}`;
  return { imageUrl, error: "" };
}
