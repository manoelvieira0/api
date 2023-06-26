const { Router } = require("express"); // Importando o Router

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router() // Inicializando o Router das rotas do usuário

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create)

module.exports = notesRoutes;