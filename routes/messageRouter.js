const { Router } = require("express");
const messageRouter = Router();

//controller functions
const { printHello } = require("../controllers/exampleMsgController");

messageRouter.get("/", printHello);

module.exports = messageRouter;