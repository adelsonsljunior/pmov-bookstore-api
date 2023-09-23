-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url_image" TEXT NOT NULL,
    "number_pages" TEXT NOT NULL,
    "published_year" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
