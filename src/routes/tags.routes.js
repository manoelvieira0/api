const { Router } = require("express"); // Importando o Router

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router() // Inicializando o Router das rotas do usuário

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;