import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  amount: z.coerce.number().positive(),
  method: z.string().min(2),
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

    const { amount, method } = parsed.data;

    const req = await prisma.depositRequest.create({
      data: {
        userId: auth.payload.userId,
        amount,
        method,
      },
    });

    await prisma.notification.create({
      data: {
        userId: auth.payload.userId,
        title: "Richiesta deposito inviata",
        message: `Hai inviato una richiesta di ${amount.toFixed(2)} NXF via ${method}`,
      },
    });

    return NextResponse.json({ ok: true, id: req.id });
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
