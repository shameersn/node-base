const HttpStatus = require('http-status-codes');
const express = require('express');

const router = express.Router();
const {LANGUAGE_KEYS} = require('../helpers/constants');

router.get('/', (req, res) => {
  res
    .send({
      date: new Date(),
      version: '0.0.0',
      microService: req.t(LANGUAGE_KEYS.COMMON_MICRO_SERVICE),
    })
    .status(HttpStatus.OK)
    .end();
});

module.exports = router;
