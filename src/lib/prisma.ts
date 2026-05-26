import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

if (typeof BigInt !== 'undefined') {
    (BigInt.prototype as any).toJSON = function () {
        return Number(this);
    };
}

const globalForPrisma = global as typeof globalThis & {
    prisma?: PrismaClient;
};

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: process.env.DEBUG_PRISMA_QUERY === '1' ? ['query', 'warn', 'error'] : ['warn', 'error'],
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
