const {Logger} = require('./logger');
const expressLoader = require('./express');

module.exports = async app => {
  try {
    Logger.info('Express initialization started');
    expressLoader(app);
    Logger.info('Express initialization completed');
  } catch (error) {
    Logger.error('Initialization failed -- ', error);
    process.exit(1);
  }
};
