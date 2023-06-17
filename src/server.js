const express = require("express"); //Importando todas as funcionalidades do express para a constante

const routes = require("./routes")

const app = express(); //Inicializando o express
app.use(express.json())

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 