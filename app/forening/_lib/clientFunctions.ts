export async function uploadImageClient({
  file,
  foreningsId
}: {
  file: File;
  foreningsId: string;
}) {
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
