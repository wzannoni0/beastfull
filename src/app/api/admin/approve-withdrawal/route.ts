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

  const balance = await prisma.balance.findUnique({ where: { userId: withdrawal.userId } });
  if (!balance || Number(balance.amount) < Number(withdrawal.amount)) {
    return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
  }

  await prisma.withdrawalRequest.update({
    where: { id },
    data: { status: "APPROVED" },
  });

  await prisma.balance.update({
    where: { userId: withdrawal.userId },
    data: { amount: { decrement: withdrawal.amount } },
  });

  await prisma.transaction.create({
    data: {
      userId: withdrawal.userId,
      amount: withdrawal.amount,
      type: "WITHDRAWAL",
      description: "Withdrawal approved",
    },
  });

  await prisma.adminLog.create({
    data: {
      adminUserId: session.userId,
      action: "APPROVE_WITHDRAWAL",
      targetUser: withdrawal.userId,
      details: `Approved withdrawal of ${withdrawal.amount}`,
    },
  });

  return NextResponse.redirect(new URL("/admin", req.url));
}