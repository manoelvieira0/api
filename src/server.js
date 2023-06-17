const express = require("express"); //Importando todas as funcionalidades do express para a constante

const app = express(); //Inicializando o express

app.post("/users", (request, response) => {
    response.send(`Você chamou o POST`)
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 