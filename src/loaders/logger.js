const winston = require('winston');
const {logs, environment} = require('../config');

const transports = [];
if (environment !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      ),
    })
  );
}

const Logger = winston.createLogger({
  level: logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({stack: true}),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
});

module.exports = {
  Logger,
};
