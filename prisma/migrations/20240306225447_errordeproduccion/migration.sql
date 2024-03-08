/*
  Warnings:

  - You are about to drop the column `Rol` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Rol",
ADD COLUMN     "Rol" TEXT NOT NULL DEFAULT 'CHILDREN';
