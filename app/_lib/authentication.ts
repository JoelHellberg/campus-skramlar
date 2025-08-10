"use server";

import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { fetchDataRow } from "./supabase/adminFunctions";
import { BossaPrivate } from "./types";

const secret = process.env.SECRET;
if (!secret) {
  throw new Error("Missing SECRET environment variable");
}
const key = new TextEncoder().encode(process.env.SECRET);

const SESSION_COOKIE = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000, // 1 day
} as const;

async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

async function decrypt(token: string | undefined) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

// Checks if there exists an account with the specified password
async function checkPassword(password: string): Promise<string | null> {
  const bossaPrivate = (await fetchDataRow(
    "bossorPrivate",
    "password",
    password
  )) as BossaPrivate | null;
  if (bossaPrivate) {
    return bossaPrivate.id as string;
  }
  return null;
}

// -- Creating a session cookie

export async function createSession(password: string): Promise<string | null> {
  const id = await checkPassword(password);
  if (id) {
    try {
      const expires = new Date(Date.now() + SESSION_COOKIE.duration);
      const sessionData = {
        id: id,
        password: password,
        expires: expires,
      };
      const session = await encrypt(sessionData);

      const cookieStore = await cookies();
      // Set your encrypted session cookie
      cookieStore.set(SESSION_COOKIE.name, session, {
        ...SESSION_COOKIE.options,
        expires,
      });

      // Set the plain 'foreningsId' cookie
      cookieStore.set("foreningsId", id, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "lax",
        expires,
      });

      return id;
    } catch (error) {
      console.error("Error creating session:", error);
      throw new Error("Error creating session");
    }
  }
  return null;
}

// -- Verifying users & accounts

export async function verifySession(): Promise<string | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE.name)?.value;

  const session = await decrypt(sessionCookie);
  if (session) {
    const password = session.password as string | null;
    if (password) {
      const cookieId = session.id;
      const id = await checkPassword(password);
      if (id == cookieId) {
        return id;
      }
    }
  }

  return null;
}

// -- Deleting the session cookies

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE.name);
}
