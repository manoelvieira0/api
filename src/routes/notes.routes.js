const { Router } = require("express"); // Importando o Router

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router() // Inicializando o Router das rotas do usuário

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.get("/", notesController.index);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;