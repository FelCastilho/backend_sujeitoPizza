import { Router, Request, Response } from "express";

const router = Router();

//Tipando os itens com TS, assim podemos ver o que ele retorna
router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: "Sujeito Pizza" })
})

export { router };