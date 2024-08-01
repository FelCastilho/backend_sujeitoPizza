//Esse middleware server para controlar o login do usuário, ou seja, ele vai servir para criar rotas exclusivas para usuário logados.

import { Response, Request, NextFunction } from "express";

import { verify } from "jsonwebtoken"; 

interface Payload{
    sub: string, //Id do usuário codificado
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    console.log('chamando middleware')

    //Recebendo o token
    const authToken = req.headers.authorization;

    //Caso nao tenha token (NÃO AUTORIZADO)
    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")
    console.log(token);

    try{
        //Validar o token (pegando o id)

        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro de uma variavel.
        req.user_id = sub;

        return next();

    }catch(err){
        return res.status(401).end();
    }
}

