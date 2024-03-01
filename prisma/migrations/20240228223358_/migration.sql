/*
  Warnings:

  - The `Rol` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EnumRol" AS ENUM ('ADMIN', 'FATHER', 'CHILDREN');

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Rol",
ADD COLUMN     "Rol" "EnumRol" DEFAULT 'FATHER';
