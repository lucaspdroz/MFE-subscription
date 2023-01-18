/*
  Warnings:

  - You are about to drop the column `initialPrice` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "subscription_active" TEXT NOT NULL DEFAULT '1',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("createdAt", "email", "id", "subscription_active", "updatedAt") SELECT "createdAt", "email", "id", "subscription_active", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
