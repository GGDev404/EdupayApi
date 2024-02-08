-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "Id_Hijo" INTEGER;

-- CreateIndex
CREATE INDEX "Id_Hijo" ON "usuarios"("Id_Hijo");
