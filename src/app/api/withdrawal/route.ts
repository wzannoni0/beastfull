import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  amount: z.coerce.number().positive(),
});

export async function POST(request: Request) {
  const auth = requireAuth(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
    }

    const { amount } = parsed.data;

    const balance = await prisma.balance.findUnique({ where: { userId: auth.payload.userId } });
    const current = balance ? Number(balance.amount) : 0;
    if (amount > current) {
      return NextResponse.json({ error: "Saldo insufficiente" }, { status: 400 });
    }

    const req = await prisma.withdrawalRequest.create({
      data: {
        userId: auth.payload.userId,
        amount,
      },
    });

    await prisma.notification.create({
      data: {
        userId: auth.payload.userId,
        title: "Richiesta prelievo inviata",
        message: `Hai inviato una richiesta di prelievo di ${amount.toFixed(2)} NXF`,
      },
    });

    return NextResponse.json({ ok: true, id: req.id });
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
