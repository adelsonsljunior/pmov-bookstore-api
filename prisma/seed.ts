import { users } from "./seeds/users";
import { books } from './seeds/books'
import { PrismaClient } from "@prisma/client";


async function usersSeed() {

    console.log(users);

    const prisma = new PrismaClient();

    const seedUsers = await prisma.user.createMany({
        data: users,
    });

    console.log(seedUsers);
}

async function booksSeed() {

    console.log(books);

    const prisma = new PrismaClient();

    const seedBooks = await prisma.book.createMany({
        data: books,
    });

    console.log(seedBooks);
}

async function main() {
    booksSeed();
    usersSeed();

}

main();
