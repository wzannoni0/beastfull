import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const emails = [
    "demo@beastfull.app",
    "admin@beastfull.app",
    "demo@nexaforce.app",
    "admin@nexaforce.app",
    "alpha@beastfull.app",
  ];

  const result = await prisma.user.deleteMany({
    where: {
      email: { in: emails },
    },
  });

  console.log(`Deleted fake users: ${result.count}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
