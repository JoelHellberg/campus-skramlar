import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
import supabase from "@/app/_lib/supabase/supabaseClient";
import { useBossaData } from "./data";

function getStorage() {
  const { storage } = supabase;
  return storage;
}

type UploadProps = {
  file: File;
  bucket: string;
  folder?: string;
  foreningsId: string;
};

export async function uploadImage({ file, bucket, folder, foreningsId }: UploadProps) {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  // const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;
  const path = `${folder ? folder + "/" : ""}${foreningsId}.${fileExtension}`;

  try {
    file = await imageCompression(file, { maxSizeMB: 0.2 });
  } catch (error) {
    console.error(error);
    return { imageUrl: "", error: "Image compression failed" };
  }

  const storage = getStorage();

  const { data, error } = await storage.from(bucket).upload(path, file, { upsert: true });
  if (error) {
    return { imageUrl: "", error: "Image upload failed" };
  }
  const imageUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
    data?.path
  }`;

  return { imageUrl, error: "" };
}
