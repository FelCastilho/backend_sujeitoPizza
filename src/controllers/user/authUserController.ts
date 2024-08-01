//Controlador para o serviço de logar o usuário

import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/authUserService";

class AuthUserController{
    async handle(req: Request, res: Response){
        //Pegando o que foi enviado 
        const { email, password } = req.body;

        const authUserService = new AuthUserService()

        const auth = await authUserService.execute({
            email,
            password
        })
        
        return res.json(auth);
    }
}

export { AuthUserController };