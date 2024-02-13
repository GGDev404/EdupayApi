/*
  Warnings:

  - You are about to drop the column `Apellido` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `metodospago` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "Apellido",
ADD COLUMN     "ApellidoM" VARCHAR(100),
ADD COLUMN     "ApellidoP" VARCHAR(100);

-- DropTable
DROP TABLE "metodospago";
