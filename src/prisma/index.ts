//Criando a conexão com o prisma
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;