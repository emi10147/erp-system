import { PrismaClient } from "@prisma/client";
import { getTidbServerless } from "@tidbcloud/serverless";
import { PrismaD1 } from "@tidbcloud/prisma-adapter";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PrismaD1(getTidbServerless()),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
