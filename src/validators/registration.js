const Joi = require('@hapi/joi');
const HttpStatus = require('http-status-codes');

const {ErrorHandler} = require('../errorHandlers');
/* This is a sample validator */
module.exports = (req, res, next) => {
  const schema = {
    email: Joi.string().email(),
    password: Joi.string()
      .min(3)
      .max(6),
  };

  const {error} = Joi.validate(req.body, schema);

  if (error) {
    const {message} = error.details[0];
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, message);
  }

  next();
};
