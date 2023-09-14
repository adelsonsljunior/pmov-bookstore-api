import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class UserController {

    public async create(req: Request, res: Response) {

        const { name, email, password } = req.body;

        console.log(name);
        console.log(email);
        console.log(password);

        const prisma = new PrismaClient();

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
            },
        });

        console.log(user)
        
        res.status(201).json({ user });

    }
}