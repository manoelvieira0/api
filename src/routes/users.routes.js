const { Router } = require("express"); // Importando o Router

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router() // Inicializando o Router das rotas do usuário

const usersController = new UsersController();

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes;