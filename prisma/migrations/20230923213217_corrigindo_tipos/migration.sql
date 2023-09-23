/*
  Warnings:

  - Changed the type of `number_pages` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `published_year` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "number_pages",
ADD COLUMN     "number_pages" INTEGER NOT NULL,
DROP COLUMN "published_year",
ADD COLUMN     "published_year" INTEGER NOT NULL;
