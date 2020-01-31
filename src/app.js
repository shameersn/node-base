const express = require('express');

const {port} = require('./config');
const {Logger} = require('./loaders/logger');
const loader = require('./loaders');

async function startServer() {
  const app = express();
  await loader(app);
  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`
        ################################################
        🛡️      Server listening on port: ${port}     🛡️
        ################################################
      `);
  });
}

startServer();
