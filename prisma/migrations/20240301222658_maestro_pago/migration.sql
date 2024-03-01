/*
  Warnings:

  - You are about to drop the `PaymentsActivitye` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Detail` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "Detail" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "DeatilId" INTEGER;

-- DropTable
DROP TABLE "PaymentsActivitye";

-- CreateTable
CREATE TABLE "PaymentDetail" (
    "Id" SERIAL NOT NULL,
    "Id_Payment" INTEGER NOT NULL,
    "Id_Activity" INTEGER NOT NULL,
    "TotalMount" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "PaymentDetail_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "_Extra_ActivityToPaymentDetail" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PaymentDetailToPeriod" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "PaymentDetail_Id_Payment_idx" ON "PaymentDetail"("Id_Payment");

-- CreateIndex
CREATE INDEX "PaymentDetail_Id_Activity_idx" ON "PaymentDetail"("Id_Activity");

-- CreateIndex
CREATE UNIQUE INDEX "_Extra_ActivityToPaymentDetail_AB_unique" ON "_Extra_ActivityToPaymentDetail"("A", "B");

-- CreateIndex
CREATE INDEX "_Extra_ActivityToPaymentDetail_B_index" ON "_Extra_ActivityToPaymentDetail"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PaymentDetailToPeriod_AB_unique" ON "_PaymentDetailToPeriod"("A", "B");

-- CreateIndex
CREATE INDEX "_PaymentDetailToPeriod_B_index" ON "_PaymentDetailToPeriod"("B");

-- CreateIndex
CREATE INDEX "Payments_Id_idx" ON "Payments"("Id");

-- CreateIndex
CREATE INDEX "Users_DeatilId_idx" ON "Users"("DeatilId");
