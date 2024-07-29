import { Router, } from "express";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";

const router = Router();

//Rotas user
router.post('/users', new CreateUserController().handle)

//Rota de login
router.post('/session', new AuthUserController().handle)

export { router };