//Logando o usuário

import prismaClient from "../../prisma";

import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){
        //Verificar se o email existe

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        //Verificando se a senha está incorreta

        //Usando o compare do bcrypt para comparar senhas
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        //Logando o usuário

        return { ok: true };
    }
}

export { AuthUserService };