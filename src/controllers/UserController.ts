import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class UserController {

    public async create(req: Request, res: Response) {

        const { name, email, password } = req.body;

        console.log(name);
        console.log(email);
        console.log(password);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        console.log(user);

        if (user) {
            return res.status(400).json({ error: "Email already eemail already existsxists" });
        }

        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });

        console.log(createUser)

        return res.status(201).json({ createUser });

    }

    public async findAll(req: Request, res: Response) {

        const prisma = new PrismaClient();

        const users = await prisma.user.findMany();

        console.log(users);

        return res.status(200).json({ users });

    }

    public async findById(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log(user);

        return res.status(200).json({ user });

    }

    public async update(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const { name, email, password, urlPhoto } = req.body;

        console.log(name);
        console.log(email);
        console.log(password);
        console.log(urlPhoto);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password,
                url_photo: urlPhoto,
            }
        });

        console.log(updateUser);

        return res.status(200).json({ updateUser });

    }

    public async delete(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const deleteUser = await prisma.user.delete({
            where: {
                id
            }
        });

        console.log(deleteUser);

        return res.status(204);

    }

}