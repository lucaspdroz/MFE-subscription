-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "subscription_active" TEXT NOT NULL DEFAULT '1',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "initialPrice" TEXT NOT NULL DEFAULT '0.00'
);
