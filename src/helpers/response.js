const HttpStatus = require('http-status-codes');
const {Logger} = require('../loaders/logger');

function success(
  req,
  res,
  statusCode = HttpStatus.OK,
  data = null,
  message = ''
) {
  return res
    .status(statusCode)
    .send({
      status: true,
      code: statusCode,
      message,
      data,
    })
    .end();
}

function failure(
  req,
  res,
  statusCode = HttpStatus.BAD_REQUEST,
  data = null,
  message = ''
) {
  Logger.error('🔥 API Error : %o %o', message, data);
  return res
    .status(statusCode)
    .send({
      status: false,
      code: statusCode,
      message,
      data,
    })
    .end();
}

module.exports = {
  success,
  failure,
};
