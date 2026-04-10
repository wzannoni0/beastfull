import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signAuthToken, verifyPassword } from "@/lib/auth";

const DEMO_ACCOUNTS = [
  {
    email: "demo@beastfull.app",
    password: "Demo123!",
    role: "USER" as const,
  },
  {
    email: "admin@beastfull.app",
    password: "Admin123!",
    role: "ADMIN" as const,
  },
];

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Input non valido" }, { status: 400 });
    }

    const { email, password } = parsed.data;

    const demo = DEMO_ACCOUNTS.find((account) => account.email === email && account.password === password);
    if (demo) {
      const token = signAuthToken({ userId: `demo-${demo.role.toLowerCase()}`, role: demo.role });
      const res = NextResponse.json({ ok: true, demo: true });
      res.cookies.set("beastfull_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return res;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Credenziali non valide" }, { status: 401 });
    }

    if (!user.isActive) {
      return NextResponse.json({ error: "Utente disattivato" }, { status: 403 });
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Credenziali non valide" }, { status: 401 });
    }

    const token = signAuthToken({ userId: user.id, role: user.role });
    const res = NextResponse.json({ ok: true });
    res.cookies.set("beastfull_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
