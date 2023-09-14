//import User from "../../domain/user/User";
import IUserRepository from "../interfaces/IUserRepository";


import { PrismaClient, User } from '@prisma/client';


export default class UserRepositoryPostgres implements IUserRepository{

    async create( name: string, email: string, password:string ): Promise<User> {

        const prisma = new PrismaClient();

        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password,
            },
        });
        
        return newUser
        
    }
}