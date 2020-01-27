const express = require("express");
const router = express.Router();
const healthRouter = require("./health");
const chatRouter = require("./chat");
const channelRouter = require("./channel");

router.use("/health", healthRouter);
router.use("/", chatRouter);
router.use("/channel", channelRouter);

module.exports = router;
