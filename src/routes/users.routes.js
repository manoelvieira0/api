const { Router } = require("express"); // Importando o Router

const usersRoutes = Router() // Inicializando o Router das rotas do usuário

usersRoutes.post("/", (request, response) => {
    const {name, email, password} = request.body;

    response.json({name, email, password})
})

module.exports = usersRoutes;