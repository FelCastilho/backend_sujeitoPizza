import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){

        //Buscando todos os itens 
        const category = await 
        prismaClient.category.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { ListCategoryService };