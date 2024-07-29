//Cadastrando um usuário no banco

import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({ name, email, password }: UserRequest){  
        
        //Verificar se o email foi enviado

        if(!email){
            throw new Error("Email incorret!")
        }

        //Verficar se o email já está cadastrado

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        //Criptografando a senha
        const passwordHash = await hash(password, 8)

        //Cadastrando
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{ //Impedindo que a senha retorne junto
                id: true,
                email: true,
                name: true,
            }
        })

        return user
    }
}

export { CreateUserService }