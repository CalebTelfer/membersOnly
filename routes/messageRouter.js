const { Router } = require("express");
const messageRouter = Router();

//controller functions
const { printHello } = require("../controllers/exampleMsgController");

messagesRouter.get("/", printHello);

module.exports = messageRouter;