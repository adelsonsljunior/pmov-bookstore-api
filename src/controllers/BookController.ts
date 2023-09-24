import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import BookFindByIdDto from "../dtos/book/BookFindByIdDTO";

export default class BookController {

    public async findAll(req: Request, res: Response) {

        const prisma = new PrismaClient;

        const books = await prisma.book.findMany({});

        console.log(books);

        return res.status(200).json({ books });

    }

    public async findById(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const prisma = new PrismaClient;

        const book = await prisma.book.findUnique({
            where: {
                id
            }
        });

        console.log(book);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        const returnedBook: BookFindByIdDto = {
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description,
            urlImage: book.url_image,
            numberPages: book.number_pages,
            publishedYear: book.published_year,
            price: book.price,
        }

        return res.status(200).json({ returnedBook });

    }

}