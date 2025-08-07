import { NextRequest, NextResponse } from "next/server";
import {
  checkAuthentication,
  uploadBufferToSupabase,
} from "@/app/_lib/supabase/adminFunctions";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;
  const foreningsId = form.get("foreningsId") as string;

  if (!file || !foreningsId) {
    return NextResponse.json(
      { imageUrl: "", error: "Missing fields" },
      { status: 400 }
    );
  }

  const isAuthenticated = await checkAuthentication(foreningsId);
  if (!isAuthenticated) {
    return NextResponse.json(
      { imageUrl: "", error: "Authentication failed" },
      { status: 403 }
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = file.name;
  console.log("filename", fileName);
  console.log("foreningsId", foreningsId);

  const { imageUrl, error } = await uploadBufferToSupabase({
  buffer,
  bucket: "loggor",
  fileName,
  foreningsId,
});


  return NextResponse.json({ imageUrl, error });
}
