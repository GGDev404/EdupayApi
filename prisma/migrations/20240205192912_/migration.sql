-- CreateTable
CREATE TABLE "ActividadExtra" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(50),
    "Descripcion" VARCHAR(200),
    "Precio" DECIMAL(10,2),
    "Imagen" VARCHAR(200),
    "Fecha_Inicio" DATE,
    "Fecha_Fin" DATE,

    CONSTRAINT "ActividadExtra_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "periodos" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(100),
    "Precio" DECIMAL(10,2),
    "Fecha_Inicio" DATE,
    "Fecha_Fin" DATE,

    CONSTRAINT "periodos_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "grados" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(20),
    "IdPeriodo" INTEGER NOT NULL,

    CONSTRAINT "grados_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "grupos" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(50),
    "Cupo" INTEGER,
    "IdGrado" INTEGER NOT NULL,

    CONSTRAINT "grupos_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "metodospago" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(50),
    "Descripcion" VARCHAR(200),

    CONSTRAINT "metodospago_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "Id" SERIAL NOT NULL,
    "Monto" DECIMAL(10,2) NOT NULL,
    "Fecha_Pago" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "MetodoPago" INTEGER NOT NULL,
    "Referencia" CHAR(10) NOT NULL,
    "Estado" VARCHAR(50) NOT NULL,
    "Id_Usuario" INTEGER NOT NULL,
    "Id_Periodo" INTEGER NOT NULL,
    "Id_ActividadExtra" INTEGER NOT NULL,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(100),
    "Apellido" VARCHAR(100),
    "CorreoElectronico" VARCHAR(50),
    "Contrasena" VARCHAR(200),
    "FotoPerfil" VARCHAR(200),
    "Id_Periodo" INTEGER,
    "Id_Grado" INTEGER,
    "Id_Grupo" INTEGER,
    "Rol" VARCHAR(50),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE INDEX "IdPeriodo" ON "grados"("IdPeriodo");

-- CreateIndex
CREATE INDEX "IdGrado" ON "grupos"("IdGrado");

-- CreateIndex
CREATE INDEX "Idx_ActividadExtra" ON "pagos"("Id_ActividadExtra");

-- CreateIndex
CREATE INDEX "Idx_Periodo" ON "pagos"("Id_Periodo");

-- CreateIndex
CREATE INDEX "Idx_Usuario" ON "pagos"("Id_Usuario");

-- CreateIndex
CREATE INDEX "Id_Grado" ON "usuarios"("Id_Grado");

-- CreateIndex
CREATE INDEX "Id_Grupo" ON "usuarios"("Id_Grupo");

-- CreateIndex
CREATE INDEX "Id_Periodo" ON "usuarios"("Id_Periodo");
