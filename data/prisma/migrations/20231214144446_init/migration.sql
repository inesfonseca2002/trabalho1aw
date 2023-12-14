/*
  Warnings:

  - You are about to drop the column `idUser` on the `utilizadoresprojetos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "utilizadoresprojetos" DROP CONSTRAINT "utilizadoresprojetos_idUser_fkey";

-- AlterTable
ALTER TABLE "utilizadoresprojetos" DROP COLUMN "idUser";
