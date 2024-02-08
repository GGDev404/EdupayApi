/*
  Warnings:

  - You are about to drop the column `Id_ActividadExtra` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `Id_Periodo` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `Id_Grado` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `Id_Hijo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `Id_Periodo` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `Id_usuarios` to the `grupos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Idx_ActividadExtra";

-- DropIndex
DROP INDEX "Idx_Periodo";

-- DropIndex
DROP INDEX "Id_Grado";

-- DropIndex
DROP INDEX "Id_Hijo";

-- DropIndex
DROP INDEX "Id_Periodo";

-- AlterTable
ALTER TABLE "grupos" ADD COLUMN     "Id_usuarios" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pagos" DROP COLUMN "Id_ActividadExtra",
DROP COLUMN "Id_Periodo";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "Id_Grado",
DROP COLUMN "Id_Hijo",
DROP COLUMN "Id_Periodo",
ADD COLUMN     "Id_tutor" INTEGER;

-- CreateTable
CREATE TABLE "UsuarioActividad" (
    "Id_Usuario" INTEGER NOT NULL,
    "Id_Actividad" INTEGER NOT NULL,

    CONSTRAINT "UsuarioActividad_pkey" PRIMARY KEY ("Id_Usuario","Id_Actividad")
);

-- CreateTable
CREATE TABLE "pagosActividades" (
    "Id_Pago" INTEGER NOT NULL,
    "Id_Actividad" INTEGER NOT NULL,

    CONSTRAINT "pagosActividades_pkey" PRIMARY KEY ("Id_Actividad","Id_Pago")
);

-- CreateIndex
CREATE INDEX "UsuarioActividad_Id_Usuario_idx" ON "UsuarioActividad"("Id_Usuario");

-- CreateIndex
CREATE INDEX "UsuarioActividad_Id_Actividad_idx" ON "UsuarioActividad"("Id_Actividad");

-- CreateIndex
CREATE INDEX "pagosActividades_Id_Actividad_idx" ON "pagosActividades"("Id_Actividad");

-- CreateIndex
CREATE INDEX "pagosActividades_Id_Pago_idx" ON "pagosActividades"("Id_Pago");

-- CreateIndex
CREATE INDEX "grupos_Id_usuarios_idx" ON "grupos"("Id_usuarios");

-- CreateIndex
CREATE INDEX "usuarios_Id_tutor_idx" ON "usuarios"("Id_tutor");
