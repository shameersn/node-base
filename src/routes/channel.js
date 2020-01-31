const express = require('express');

const router = express.Router();

const {catchErrors} = require('../errorHandlers');
const {isAuthenticated} = require('../middlewares');
const {channelValidator} = require('../validators');

// const {createChannel} = require('../controllers/channel/channel.controller');

// router.post('/', isAuthenticated, channelValidator, catchErrors(createChannel));

module.exports = router;
