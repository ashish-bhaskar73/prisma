"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['info', 'query'], });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findMany({});
        console.log("users : ");
        console.log(user);
        try {
            const admin = yield prisma.admin.findMany({
                where: {
                    email: "ashish@gmail.com"
                }
            });
            console.log("admin users");
            console.log(admin);
        }
        catch (e) {
            console.error(e);
        }
        //join conditions
        const join = yield prisma.user.findMany({
            where: { id: 1 },
            include: { admin: true }
        });
        console.log(join);
    });
}
main();
