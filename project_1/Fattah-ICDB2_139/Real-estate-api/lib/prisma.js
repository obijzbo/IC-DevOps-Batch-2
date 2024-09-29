import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to the database.');
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await prisma.$disconnect();
    console.log("run finally")
  }
}

export default prisma;
