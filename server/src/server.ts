import express from "express"
import cors from "cors"
import { routes } from "./routes";

const app = express();
// Controle de seguranca para front-ends indesejados acesse backend
app.use(cors());

// middleware que permite o express entender json, pois ele nao entende por padrao.
app.use(express.json());

//GET, POST, PUT, PATCH, DELETE

// GET = Busca
// POST = Cadastra
// PUT  = atualiza infos de uma entidade
// PATCH = atualiza uma infode uma unica entidade
// DELETE = apaga
// app.metodo(recurso, funcao)

app.use(routes);




app.listen(3333, () => {
    console.log('HTTP server running');
});

// SQLite nao preecisa ser instalado, 
// Prisme, orm para nao necessitar escrever em SQL. Se escreve em JS para converter posteriormente => Possibilidadde de trocar banco de dados sem muitas configuracoes.
// prisma e @prisma/client sao necessarios
// npx prisma init => cria .env, com variaveis de ambiente  mudam de acordo com o ambiente

/* SOLID: 5principios para codigo mais testavel
- Single Resbonsability  Principle
    Cada classe/funcao tem uma responsabilidade unica

- Open/Closed Principle
    As classses da nossa aplicacao devem ser abertas  para extensao, mas fechadas para modificacao

- Liskov Substitution Principle
    Devemos poder substituir uma classe pai por uma herenca dela e tudo continua funcionando

- Interface Substitution Principle
    ...

- Dependency Inversion Principle
    Forma de inverter as dependencias da classe. O contexto externo define o que ela usa, nao ela quem pede
*/

// Jest = test runner, framework para testes
// Testes unitarios testam peuenas unidades (funcoes) da aplicacao desacopladas do restante