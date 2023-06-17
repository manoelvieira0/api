const express = require("express"); //Importando todas as funcionalidades do express para a constante

const app = express(); //Inicializando o express

app.get("/", (request, response) => {
    response.send("Hello World")
}) // GET para exibir uma mensagem no navegador ao acessar a rota.

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 