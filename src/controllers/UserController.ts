import { PrismaClient } from "@prisma/client";
import { Request, Response, response } from "express";
import bcrypt from 'bcrypt';
import { UserCreateDto } from "../dtos/user/UserCreateDTO";
import { UserUpdateDto } from "../dtos/user/UserUpdateDTO";
import { UserLoginDto } from "../dtos/user/UserLoginDTO";

export default class UserController {

    public async create(req: Request, res: Response) {

        const userCreateDto = req.body as UserCreateDto;

        console.log(userCreateDto.name);
        console.log(userCreateDto.email);
        console.log(userCreateDto.password);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                email: userCreateDto.email
            }
        })

        console.log(user);

        if (user) {
            return res.status(400).json({ error: "Email already exist" });
        }

        const saltRounds = 10;

        userCreateDto.password = await bcrypt.hash(userCreateDto.password, saltRounds);

        const createUser = await prisma.user.create({
            data: {
                name: userCreateDto.name,
                email: userCreateDto.email,
                password: userCreateDto.password
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

        const userUpdateDto = req.body as UserUpdateDto;

        console.log(userUpdateDto.name);
        console.log(userUpdateDto.email);
        console.log(userUpdateDto.password);
        console.log(userUpdateDto.urlPhoto);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const saltRounds = 10;

        userUpdateDto.password = await bcrypt.hash(userUpdateDto.password, saltRounds);

        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                name: userUpdateDto.name,
                email: userUpdateDto.email,
                password: userUpdateDto.password,
                url_photo: userUpdateDto.urlPhoto,
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

    public async login(req: Request, res: Response) {

        const userLoginDto = req.body as UserLoginDto;

        console.log(userLoginDto.email);
        console.log(userLoginDto.password);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                email: userLoginDto.email
            }
        });

        console.log(user);

        if (!user) {
            return res.status(400).json({ error: " email errado, parceiro " }); //mudar mensagem
        }

        const passwordMatch = await bcrypt.compare(userLoginDto.password, user!.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: " senha errado, parceiro " }); //mudar mensagem
        }

        console.log("senha certa");

        return res.status(200).json({ user });

    }



}