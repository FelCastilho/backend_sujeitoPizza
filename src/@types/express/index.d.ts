//Criando uma tipagem própria

declare namespace Express {
    export interface Request {
        user_id: string;
    }
}

//OBS: Para criar essa tipagem, é necessário nomear a pasta do jeito que está, lembrando que o projeto não pode estar rodando

//Vale lembrar também que devemos colocar aonde a tipagem está localizada, isso dentro de tsconfig

/*
"typeRoots": [
      "./src/@types"
    ],    
*/