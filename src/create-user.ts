import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    await prisma.user.create({
        data: {
            id: 121,
            name: "ashish bhaskar",
            verified: true
        }
    })
}

main().then(async () => {
    console.log("done with query");

    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
})