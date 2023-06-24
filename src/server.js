require("express-async-errors");
const AppError = require("./utils/AppError");

const express = require("express"); //Importando todas as funcionalidades do express para a constante

const routes = require("./routes")

const app = express(); //Inicializando o express
app.use(express.json())

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error)

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
}) 

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 