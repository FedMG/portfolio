-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "alt" SET DATA TYPE VARCHAR(180);

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "repository" SET DATA TYPE VARCHAR(130),
ALTER COLUMN "website" SET DATA TYPE VARCHAR(130);

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "title" SET DATA TYPE VARCHAR(80);