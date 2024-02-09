/*
  Warnings:

  - You are about to drop the column `Id_usuarios` on the `grupos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "grupos_Id_usuarios_idx";

-- AlterTable
ALTER TABLE "grupos" DROP COLUMN "Id_usuarios";
