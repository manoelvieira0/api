const express = require("express"); //Importando todas as funcionalidades do express para a constante

const app = express(); //Inicializando o express
app.use(express.json())

app.post("/users", (request, response) => {
    const {name, email, password} = request.body;
    response.json({name, email, password})
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 