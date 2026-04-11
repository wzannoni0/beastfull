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

  const withdrawal = await prisma.withdrawalRequest.findUnique({ where: { id } });
  if (!withdrawal) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.withdrawalRequest.update({
    where: { id },
    data: { status: "REJECTED" },
  });

  await prisma.adminLog.create({
    data: {
      adminUserId: session.userId,
      action: "REJECT_WITHDRAWAL",
      targetUser: withdrawal.userId,
      details: `Rejected withdrawal of ${withdrawal.amount}`,
    },
  });

  return NextResponse.redirect(new URL("/admin", req.url));
}