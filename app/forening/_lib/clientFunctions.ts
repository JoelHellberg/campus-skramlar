"use client";
import imageCompression from "browser-image-compression";
export async function uploadImageClient({
  file,
  foreningsId,
}: {
  file: File;
  foreningsId: string;
}) {
  try {
    const compressedBlob = await imageCompression(file, {
      maxSizeMB: 0.2,
      maxIteration: 20,
      useWebWorker: true,
    });

    // Skapa en ny File så vi behåller rätt filnamn
    file = new File([compressedBlob], file.name, { type: compressedBlob.type });
  } catch (error) {
    console.error(error);
    return { imageUrl: "", error: "Image compression failed" };
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("foreningsId", foreningsId);

  const res = await fetch("/api/upload-image", {
    method: "POST",
    body: formData,
  });

  const result = await res.json();
  return result;
}
