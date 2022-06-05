import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    // Cada operacao e colocada em um log e mostrada
    log: ['query'],
});