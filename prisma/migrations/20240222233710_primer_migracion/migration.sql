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
CREATE TABLE "periodos" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(100),
    "Price" DECIMAL(10,2),
    "Start_date" DATE,
    "Final_Date" DATE,

    CONSTRAINT "periodos_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Grades" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(20),
    "Id_Period" INTEGER NOT NULL,

    CONSTRAINT "Grades_pkey" PRIMARY KEY ("Id")
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
    "Monto" DECIMAL(10,2) NOT NULL,
    "Fecha_Payment" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Payment_Method" INTEGER NOT NULL,
    "Referencia" CHAR(10) NOT NULL,
    "Estado" VARCHAR(50) NOT NULL,
    "Id_User" INTEGER NOT NULL,

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
    "Rol" TEXT,
    "refreshToken" VARCHAR(50),
    "Id_tutor" INTEGER,
    "Firs_Name" VARCHAR(100),
    "Last_Name" VARCHAR(100),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserActivity" (
    "Id_User" INTEGER NOT NULL,
    "Id_Activity" INTEGER NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("Id_User","Id_Activity")
);

-- CreateTable
CREATE TABLE "PaymentsActivityes" (
    "Id_Payment" INTEGER NOT NULL,
    "Id_Activity" INTEGER NOT NULL,

    CONSTRAINT "PaymentsActivityes_pkey" PRIMARY KEY ("Id_Activity","Id_Payment")
);

-- CreateIndex
CREATE INDEX "Id_Period" ON "Grades"("Id_Period");

-- CreateIndex
CREATE INDEX "Id_Grade" ON "Groups"("Id_Grade");

-- CreateIndex
CREATE INDEX "Idx_User" ON "Payments"("Id_User");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Email_key" ON "Users"("Email");

-- CreateIndex
CREATE INDEX "Id_Group" ON "Users"("Id_Group");

-- CreateIndex
CREATE INDEX "Users_Id_tutor_idx" ON "Users"("Id_tutor");

-- CreateIndex
CREATE INDEX "UserActivity_Id_User_idx" ON "UserActivity"("Id_User");

-- CreateIndex
CREATE INDEX "UserActivity_Id_Activity_idx" ON "UserActivity"("Id_Activity");

-- CreateIndex
CREATE INDEX "PaymentsActivityes_Id_Activity_idx" ON "PaymentsActivityes"("Id_Activity");

-- CreateIndex
CREATE INDEX "PaymentsActivityes_Id_Payment_idx" ON "PaymentsActivityes"("Id_Payment");
