//O controler é responsável por chamar a função correta 
//O controller vai passar para service fazer a requisição

import { Request, Response} from "express";

import { CreateUserService } from "../../services/user/createUserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        //Pegando os dados que o usuário enviou
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        //Chama o serviço repassando os dados do usuário
        const user = await createUserService.execute({
            name,
            email,
            password
        });
        
        return res.json(user)
    }
}

export { CreateUserController };