/*
  Warnings:

  - Changed the type of `datainicio` on the `projeto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "projeto" DROP COLUMN "datainicio",
ADD COLUMN     "datainicio" TIMESTAMP(3) NOT NULL;
