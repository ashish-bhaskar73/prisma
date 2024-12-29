import { PrismaClient } from "@prisma/client";
import { lstat } from "fs";

const prisma = new PrismaClient({ log: ['info', 'query'], });

async function main() {
    const user = await prisma.user.findMany({});
    console.log("users : ")
    console.log(user);

    try {
        const admin = await prisma.admin.findMany({
            where: {
                email: "ashish@gmail.com"
            }
        })
        console.log("admin users");
        console.log(admin);
    } catch (e) {
        console.error(e);
    }


    //join conditions

    const join = await prisma.user.findMany({
        where: { id: 1 },
        include: { admin: true }
    })

    console.log(join);

}


main();