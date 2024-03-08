/*
  Warnings:

  - You are about to drop the column `refreshToken` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Groups" ADD COLUMN     "Description" VARCHAR(200);

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "refreshToken";
