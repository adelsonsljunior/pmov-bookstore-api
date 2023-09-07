import { User } from "@prisma/client";


export default interface IUserRepository{

    create(name: string, email: string, password:string): Promise<User>;
    
}