const routes = require("express").router();
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll) 

module.exports = routes