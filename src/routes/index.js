const express = require('express');

const router = express.Router();
const healthRouter = require('./health');
const channelRouter = require('./channel');

router.use('/health', healthRouter);
router.use('/channel', channelRouter);

module.exports = router;
