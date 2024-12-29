import { PrismaClient } from "@prisma/client";
import { info } from "console";


const prisma = new PrismaClient({ log: ['info', 'query'], });


async function admin() {
    await prisma.admin.create({
        data: {
            email: "ashish@gmail.com",
            adminId: 1,
            // author: {
            //     connect: {
            //         id: 121
            //     }
            // }
            authorId: 121
        }
    })
}

admin();