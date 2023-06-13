const express = require("express"); //Importando todas as funcionalidades do express para a constante

const app = express(); //Inicializando o express

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 