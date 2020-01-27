const express = require("express");
const router = express.Router();

const { catchErrors } = require("../errorHandlers");
const { isAuthenticated } = require("../middlewares");

const {
  getChat,
  getChatConfig
} = require("../controllers/chat/chat.controller");

router
  .get("/", isAuthenticated, catchErrors(getChat))
  .get("/config", isAuthenticated, catchErrors(getChatConfig));

module.exports = router;
