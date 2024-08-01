import { Router } from "express";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//Rotas user
router.post('/users', new CreateUserController().handle)

//Rota de login
router.post('/session', new AuthUserController().handle)

//Buscando as informações do usuário
router.get('/me', isAuthenticated, new DetailUserController().handle);

export { router };