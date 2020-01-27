/* File is copied from wesbos - learn node git hub repo and modified */
const HttpStatus = require('http-status-codes');
const {failure} = require('../helpers/response');
/**
 * Custom Error Handler class to throw errors with custom status code
 */
class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

const catchErrors = fn =>
  function(req, res, next) {
    return fn(req, res, next).catch(next);
  };

/*
  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
const notFound = (req, res, next) => {
  const err = new Error('Not found');
  err.status = HttpStatus.NOT_FOUND;

  next(err, req, res);
};

const ValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err, req, res);
  // validation of the validation errors are array returned by JOI
  const error = err.errors[0];
  error.status = HttpStatus.BAD_REQUEST;
  next(error, req, res);
  // add more custom logic if needed
};

/*
Development Error Handler
In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened
*/
// eslint-disable-next-line no-unused-vars
const developmentErrors = (err, req, res, next) => {
  const {status, message} = err;
  err.stack = err.stack || '';
  const errorDetails = {
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      '<mark>$&</mark>'
    ),
  };

  return failure(
    req,
    res,
    status || HttpStatus.INTERNAL_SERVER_ERROR,
    errorDetails,
    message
  );
};

/*
  Production Error Handler
  No stack traces are leaked to user
*/
// eslint-disable-next-line no-unused-vars
const productionErrors = (err, req, res, next) => {
  const {status, message} = err;
  return failure(
    req,
    res,
    status || HttpStatus.INTERNAL_SERVER_ERROR,
    null,
    message
  );
};

module.exports = {
  productionErrors,
  developmentErrors,
  ValidationErrors,
  catchErrors,
  notFound,
  ErrorHandler,
};
