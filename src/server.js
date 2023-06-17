const express = require("express"); //Importando todas as funcionalidades do express para a constante

const app = express(); //Inicializando o express

app.get("/message/:id", (request, response) => {
    const { id } = request.params;
    response.send(`ID da mensagem: ${id}`)
}) // GET para exibir uma mensagem no navegador ao acessar a rota.

app.get("/users", (request, response) => {
    const {page, limit} = request.query;
    response.send(`Página: ${page} | Limite: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 