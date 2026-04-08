export function generateReferralCode(username: string) {
  const clean = username.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6) || "BEAST";
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${clean}-${random}`;
}
