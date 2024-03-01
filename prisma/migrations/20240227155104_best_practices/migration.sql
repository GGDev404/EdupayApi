/*
  Warnings:

  - You are about to drop the column `Estado` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `Fecha_Payment` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `Monto` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `Referencia` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the `Grades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentsActivityes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `periodos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Mount` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Regerence` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "Estado",
DROP COLUMN "Fecha_Payment",
DROP COLUMN "Monto",
DROP COLUMN "Referencia",
ADD COLUMN     "Mount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "Payment_Date" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Regerence" CHAR(10) NOT NULL,
ADD COLUMN     "Status" VARCHAR(50) NOT NULL;

-- DropTable
DROP TABLE "Grades";

-- DropTable
DROP TABLE "PaymentsActivityes";

-- DropTable
DROP TABLE "periodos";

-- CreateTable
CREATE TABLE "Period" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(100),
    "Price" DECIMAL(10,2),
    "Start_date" DATE,
    "Final_Date" DATE,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(20),
    "Id_Period" INTEGER NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "PaymentsActivitye" (
    "Id_Payment" INTEGER NOT NULL,
    "Id_Activity" INTEGER NOT NULL,

    CONSTRAINT "PaymentsActivitye_pkey" PRIMARY KEY ("Id_Activity","Id_Payment")
);

-- CreateIndex
CREATE INDEX "Id_Period" ON "Grade"("Id_Period");

-- CreateIndex
CREATE INDEX "PaymentsActivitye_Id_Activity_idx" ON "PaymentsActivitye"("Id_Activity");

-- CreateIndex
CREATE INDEX "PaymentsActivitye_Id_Payment_idx" ON "PaymentsActivitye"("Id_Payment");
