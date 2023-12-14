-- CreateTable
CREATE TABLE "categorias" (
    "idcateg" SERIAL NOT NULL,
    "nomecat" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("idcateg")
);

-- CreateTable
CREATE TABLE "projeto" (
    "idprojeto" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "notas" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "datainicio" TEXT NOT NULL,
    "datafim" TEXT NOT NULL,
    "idcat" INTEGER NOT NULL,

    CONSTRAINT "projeto_pkey" PRIMARY KEY ("idprojeto")
);

-- CreateTable
CREATE TABLE "utilizadores" (
    "idutil" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "utilizadores_pkey" PRIMARY KEY ("idutil")
);

-- CreateTable
CREATE TABLE "utilizadoresprojetos" (
    "id" SERIAL NOT NULL,
    "idproject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "utilizadoresprojetos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nomecat_key" ON "categorias"("nomecat");

-- CreateIndex
CREATE UNIQUE INDEX "utilizadores_email_key" ON "utilizadores"("email");

-- AddForeignKey
ALTER TABLE "projeto" ADD CONSTRAINT "projeto_idcat_fkey" FOREIGN KEY ("idcat") REFERENCES "categorias"("idcateg") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "utilizadoresprojetos" ADD CONSTRAINT "utilizadoresprojetos_idproject_fkey" FOREIGN KEY ("idproject") REFERENCES "projeto"("idprojeto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "utilizadoresprojetos" ADD CONSTRAINT "utilizadoresprojetos_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "utilizadores"("idutil") ON DELETE RESTRICT ON UPDATE CASCADE;
