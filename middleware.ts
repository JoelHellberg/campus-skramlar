import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./app/_lib/authentication";
 
export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  
  const protectedRoutes = [
    "/forening/profil",
    "/forening/insamlat",
    "/forening/uppdateringar",
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentPath.startsWith(route)
  );
 
  if (isProtectedRoute) {
    const session = await verifySession();

    if (!session) {
      return NextResponse.redirect(new URL("/forening", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/forening/profil",
    "/forening/insamlat",
    "/forening/uppdateringar",
  ],
};
