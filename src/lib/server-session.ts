import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getServerSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("beastfull_token")?.value;
  if (!token) return null;
  
  const payload = verifyAuthToken(token);
  if (!payload) return null;
  
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    include: {
      profile: true,
      balance: true,
    },
  });
  
  if (!user) return null;
  
  return {
    userId: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
    profile: user.profile,
    balance: user.balance,
  };
}

export function hasRole(role: string) {
  return async () => {
    const session = await getServerSession();
    return session?.role === role;
  };
}