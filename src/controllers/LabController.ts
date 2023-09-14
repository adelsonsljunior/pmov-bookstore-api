import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class LabController {

    public async hello(req: Request, res: Response) {
        return res.status(200).json({ hello: "Hello, Elliot!" });
    }

    public async paramns(req: Request, res: Response) {
        const nome = req.params.nome;

        return res.status(200).json({ nome: nome });
    }

    public async body(req: Request, res: Response) {
        const nome = req.body.nome;

        return res.status(201).json({ nome: nome });
    }

    public async createUser(req: Request, res: Response){

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

    public async findAllUsers(req: Request, res: Response){

        const prisma = new PrismaClient();

        const users = await prisma.user.findMany();

        res.status(200).json({ users });


    }

}