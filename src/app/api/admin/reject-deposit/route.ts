import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/lib/server-session";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session || session.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const id = formData.get("id") as string;

  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  const deposit = await prisma.depositRequest.findUnique({ where: { id } });
  if (!deposit) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.depositRequest.update({
    where: { id },
    data: { status: "REJECTED" },
  });

  await prisma.adminLog.create({
    data: {
      adminUserId: session.userId,
      action: "REJECT_DEPOSIT",
      targetUser: deposit.userId,
      details: `Rejected deposit of ${deposit.amount}`,
    },
  });

  return NextResponse.redirect(new URL("/admin", req.url));
}