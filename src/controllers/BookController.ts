import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export default class BookController{

    public async findAll(req: Request, res: Response) {
        
        const prisma = new PrismaClient;

        const books = await prisma.book.findMany({});

        console.log(books);

        return res.status(200).json({ books });
        
    }

}