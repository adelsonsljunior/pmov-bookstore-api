import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userCreateInputDto } from "../dtos/user/UserCreateInputDTO";
import { UserUpdateDto } from "../dtos/user/UserUpdateDTO";
import { UserLoginDto } from "../dtos/user/UserLoginDTO";
import { userCreateOutputDto } from "../dtos/user/UserCreateOutputDTO";

export default class UserController {

    public async create(req: Request, res: Response) {

        const userCreateInputDto = req.body as userCreateInputDto;

        console.log(userCreateInputDto.name);
        console.log(userCreateInputDto.email);
        console.log(userCreateInputDto.password);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                email: userCreateInputDto.email
            }
        })

        console.log(user);

        if (user) {
            return res.status(400).json({ error: "Email already exist" });
        }

        const saltRounds = 10;

        userCreateInputDto.password = await bcrypt.hash(userCreateInputDto.password, saltRounds);

        const createdUser = await prisma.user.create({
            data: {
                name: userCreateInputDto.name,
                email: userCreateInputDto.email,
                password: userCreateInputDto.password
            },
        });

        console.log(createdUser)

        const returnedUser: userCreateOutputDto = {
            id: createdUser.id,
            email: createdUser.email,
            name: createdUser.name
            }

        return res.status(201).json({ returnedUser });

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
            return res.status(400).json({ error: " Incorrect email or password " }); 
        }

        const passwordMatch = await bcrypt.compare(userLoginDto.password, user!.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: " Incorrect email or password " });
        }

        console.log("senha certa");

        return res.status(200).json({ user });

    }



}