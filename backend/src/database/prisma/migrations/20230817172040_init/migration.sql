/*
  Warnings:

  - You are about to drop the `Technologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Technologies" DROP CONSTRAINT "Technologies_projectId_fkey";

-- DropTable
DROP TABLE "Technologies";

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Technology_projectId_key" ON "Technology"("projectId");

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
