const Joi = require('@hapi/joi');
const HttpStatus = require('http-status-codes');

const {ErrorHandler} = require('../errorHandlers');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(60)
      .required(),
    channel_url: Joi.string()
      .min(36)
      .max(80)
      .required(),
    cover_url: Joi.string(),
    custom_type: Joi.string(),
    is_distinct: Joi.boolean().required(),
    user_ids: Joi.array().required(),
    operator_ids: Joi.array()
      .length(1)
      .required(),
  });

  const {error} = schema.validate(req.body);

  if (error) {
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, error.details);
  }

  next();
};
