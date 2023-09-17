import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
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

    public async createUser(req: Request, res: Response) {

        const { name, email, password } = req.body;

        console.log(name);
        console.log(email);
        console.log(password);

        const prisma = new PrismaClient();

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        console.log(user)

        res.status(201).json({ user });

    }

    public async findAllUsers(req: Request, res: Response) {

        const prisma = new PrismaClient();

        const users = await prisma.user.findMany();

        res.status(200).json({ users });

    }

    public async paswordHash(req: Request, res: Response) {

        const password = req.body.password;

        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(password, saltRounds);

        console.log(password);
        console.log(passwordHash);

        return res.json(
            {
                password,
                passwordHash
            }
        );

    }

    public async passworsCompare(req: Request, res: Response) {

        const password = req.body.password;

        const passwordHash = "$2b$10$i/emkAURGcDjaPWwwcrTvuWczM5FqghwapzMl0xZwPKc8UqAeqQRS" //12345678

        const verdadeOuFake = await bcrypt.compare(password, passwordHash);

        return res.json({
            verdadeOuFake
        });

    }
}