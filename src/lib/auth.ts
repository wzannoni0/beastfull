import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export type AuthTokenPayload = {
  userId: string;
  role: "USER" | "ADMIN";
};

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signAuthToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyAuthToken(token: string): AuthTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request: NextRequest | Request) {
  const nextRequest = request as NextRequest;
  if (nextRequest.cookies) {
    return nextRequest.cookies.get("beastfull_token")?.value ?? null;
  }

  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const tokenPart = cookieHeader
    .split(";")
    .map((chunk) => chunk.trim())
    .find((chunk) => chunk.startsWith("beastfull_token="));

  if (!tokenPart) return null;
  return decodeURIComponent(tokenPart.replace("beastfull_token=", ""));
}
