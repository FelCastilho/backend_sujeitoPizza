//Configurando a inicialização do projeto
import express, { Request, Response, NextFunction } from "express";
//Deve ser sempre segundo import
import 'express-async-errors';

import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

app.use((err: Error, req: Request, res:Response, next:NextFunction) => {

    if(err instanceof Error){
        //Se for uma instancia do tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(400).json({
        status: 'error',
        message: 'internal server error.'
    })

})

app.listen(3333, () => console.log("Servidor iniciado!"));