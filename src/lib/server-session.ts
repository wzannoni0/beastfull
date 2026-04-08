import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";

export async function getServerSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("beastfull_token")?.value;
  if (!token) return null;
  return verifyAuthToken(token);
}
