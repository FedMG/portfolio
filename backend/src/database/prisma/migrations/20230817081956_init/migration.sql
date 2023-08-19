/*
  Warnings:

  - You are about to alter the column `description` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(380)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "description" SET DATA TYPE VARCHAR(380);
