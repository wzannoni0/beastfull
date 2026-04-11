import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/lib/server-session";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session || session.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const userId = formData.get("userId") as string;

  if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (user.id === session.userId) {
    return NextResponse.json({ error: "Cannot toggle yourself" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { isActive: !user.isActive },
  });

  await prisma.adminLog.create({
    data: {
      adminUserId: session.userId,
      action: user.isActive ? "BLOCK_USER" : "UNBLOCK_USER",
      targetUser: userId,
      details: `User ${user.username} ${user.isActive ? "blocked" : "unblocked"}`,
    },
  });

  return NextResponse.redirect(new URL("/admin", req.url));
}