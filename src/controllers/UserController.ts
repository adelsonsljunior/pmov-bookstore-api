import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userCreateInputDto } from "../dtos/user/UserCreateInputDTO";
import { UserUpdateInputDto } from "../dtos/user/UserUpdateInputDTO";
import { UserLoginInputDto } from "../dtos/user/UserLoginInputDTO";
import { userCreateOutputDto } from "../dtos/user/UserCreateOutputDTO";
import UserUpdateOutputDto from "../dtos/user/UserUpdateOutputDTO";
import UserFindByIdDto from "../dtos/user/UserFindByIdDTO";

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

        const returnedUser: UserFindByIdDto = {
            id: user.id,
            name: user.name,
            email: user.email,
            urlPhoto: user.url_photo ?? undefined,


        }

        return res.status(200).json({ returnedUser });

    }

    public async update(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const userUpdateInputDto = req.body as UserUpdateInputDto;

        console.log(userUpdateInputDto.name);
        console.log(userUpdateInputDto.email);
        console.log(userUpdateInputDto.password);
        console.log(userUpdateInputDto.urlPhoto);

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

        userUpdateInputDto.password = await bcrypt.hash(userUpdateInputDto.password, saltRounds);

        const updatedUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                name: userUpdateInputDto.name,
                email: userUpdateInputDto.email,
                password: userUpdateInputDto.password,
                url_photo: userUpdateInputDto.urlPhoto,
            },
        });

        console.log(updatedUser);

        const returnedUser: UserUpdateOutputDto = {
            id: updatedUser.id,
            email: updatedUser.email,
            name: updatedUser.name,
            urlPhoto: updatedUser.url_photo ?? undefined,
        }

        return res.status(200).json({ returnedUser });

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

        const userLoginInputDto = req.body as UserLoginInputDto;

        console.log(userLoginInputDto.email);
        console.log(userLoginInputDto.password);

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where: {
                email: userLoginInputDto.email
            }
        });

        console.log(user);

        if (!user) {
            return res.status(400).json({ error: " Incorrect email or password " }); 
        }

        const passwordMatch = await bcrypt.compare(userLoginInputDto.password, user!.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: " Incorrect email or password " });
        }

        console.log("senha certa");

        const returnedUser: UserUpdateOutputDto = {
            id: user.id,
            email: user.email,
            name: user.name,
        }

        return res.status(200).json({ returnedUser });

    }



}