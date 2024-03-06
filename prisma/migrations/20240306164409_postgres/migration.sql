-- CreateTable
CREATE TABLE "Extra_Activity" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(50),
    "Description" VARCHAR(200),
    "Price" DECIMAL(10,2),
    "Image" VARCHAR(200),
    "Start_date" DATE,
    "Final_Date" DATE,

    CONSTRAINT "Extra_Activity_pkey" PRIMARY KEY ("Id")
);

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
CREATE TABLE "Groups" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(50),
    "Quota" INTEGER,
    "Id_Grade" INTEGER NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "Id" SERIAL NOT NULL,
    "Mount" DECIMAL(10,2) NOT NULL,
    "Payment_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Payment_Method" INTEGER NOT NULL,
    "Regerence" CHAR(10) NOT NULL,
    "Status" VARCHAR(50) NOT NULL,
    "Id_User" INTEGER NOT NULL,
    "Detail" INTEGER NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Users" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(100),
    "Email" VARCHAR(50),
    "Password" VARCHAR(200),
    "Profile_Photo" VARCHAR(200),
    "Id_Group" INTEGER,
    "Role" TEXT NOT NULL DEFAULT 'CHILDREN',
    "refreshToken" VARCHAR(50),
    "Id_tutor" INTEGER,
    "Firs_Name" VARCHAR(100),
    "Last_Name" VARCHAR(100),
    "DeatilId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserActivity" (
    "Id_User" INTEGER NOT NULL,
    "Id_Activity" INTEGER NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("Id_User","Id_Activity")
);

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
CREATE INDEX "Id_Period" ON "Grade"("Id_Period");

-- CreateIndex
CREATE INDEX "Id_Grade" ON "Groups"("Id_Grade");

-- CreateIndex
CREATE INDEX "Idx_User" ON "Payments"("Id_User");

-- CreateIndex
CREATE INDEX "Payments_Id_idx" ON "Payments"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Email_key" ON "Users"("Email");

-- CreateIndex
CREATE INDEX "Id_Group" ON "Users"("Id_Group");

-- CreateIndex
CREATE INDEX "Users_Id_tutor_idx" ON "Users"("Id_tutor");

-- CreateIndex
CREATE INDEX "Users_DeatilId_idx" ON "Users"("DeatilId");

-- CreateIndex
CREATE INDEX "UserActivity_Id_User_idx" ON "UserActivity"("Id_User");

-- CreateIndex
CREATE INDEX "UserActivity_Id_Activity_idx" ON "UserActivity"("Id_Activity");

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
