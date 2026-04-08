import { NextRequest, NextResponse } from "next/server";
import { getTokenFromRequest, verifyAuthToken } from "@/lib/auth";

type AuthResult =
  | {
      payload: { userId: string; role: "USER" | "ADMIN" };
      error?: never;
    }
  | {
      payload?: never;
      error: NextResponse;
    };

export function requireAuth(request: NextRequest | Request): AuthResult {
  const nextReq = request as NextRequest;
  const token = getTokenFromRequest(nextReq);
  if (!token) {
    return { error: NextResponse.json({ error: "Non autenticato" }, { status: 401 }) };
  }

  const payload = verifyAuthToken(token);
  if (!payload) {
    return { error: NextResponse.json({ error: "Sessione non valida" }, { status: 401 }) };
  }

  return { payload };
}

export function requireAdmin(request: NextRequest | Request) {
  const auth = requireAuth(request);
  if (auth.error) return auth;
  if (auth.payload.role !== "ADMIN") {
    return { error: NextResponse.json({ error: "Accesso admin richiesto" }, { status: 403 }) };
  }
  return auth;
}
