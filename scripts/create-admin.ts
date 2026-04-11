import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('Ibizacera66!', 10)
  
  // Create user
  const user = await prisma.user.upsert({
    where: { email: 'walterzannoni90@outlook.it' },
    update: {},
    create: {
      username: 'walter',
      email: 'walterzannoni90@outlook.it',
      passwordHash,
      role: 'ADMIN',
      isActive: true,
    },
  })

  // Create profile
  await prisma.profile.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      referralCode: 'WALTER',
      currentLevel: 1,
      badge: 'Founder',
    },
  })

  // Create balance
  await prisma.balance.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      amount: 10000,
    },
  })

  console.log('User created:', user.id, user.email, user.role)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())