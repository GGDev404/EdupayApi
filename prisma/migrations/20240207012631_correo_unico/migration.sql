/*
  Warnings:

  - A unique constraint covering the columns `[CorreoElectronico]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuarios_CorreoElectronico_key" ON "usuarios"("CorreoElectronico");
