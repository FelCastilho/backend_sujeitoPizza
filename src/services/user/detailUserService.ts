import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({
            //Buscando no banco o primeiro item que for igual ao procurado
            where:{
                id: user_id
            },
            select:{ //Sekecionando o que vai aparecer 
                id: true,
                name: true,
                email: true
            }
        })

        return { user }
    }
}

export { DetailUserService };