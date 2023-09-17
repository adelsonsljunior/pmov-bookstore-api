import { users } from "./seeds/users";
import { PrismaClient } from "@prisma/client";


async function usersSeed(){
    
    console.log(users);

    const prisma = new PrismaClient();

    const seedUsers = await prisma.user.createMany({
        data: users,
    });

    console.log(seedUsers);
}

async function main() {
    usersSeed();

}

main();
