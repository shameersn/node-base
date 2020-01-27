const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const {database} = require('../config');

const DB = {};
const sequelize = new Sequelize(database.name, null, null, {
  logging: database.queryLogging,
  dialect: database.dialect,
  define: {
    charset: database.charset,
    collate: database.collate,
    freezeTableName: database.freezeTableName,
  },
  replication: {
    read: [
      {
        host: database.readReplicaHostURL,
        username: database.userName,
        password: database.password,
      },
    ],
    write: {
      host: database.hostUrl,
      username: database.userName,
      password: database.password,
    },
  },
  pool: {
    max: database.poolMaxConnections,
    min: database.poolMinConnections,
    acquire: database.poolAcquireTime,
    idle: database.poolIdleTime,
  },
});

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    DB[model.name] = model;
  });

Object.keys(DB).forEach(modelName => {
  if ('associate' in DB[modelName]) {
    DB[modelName].associate(DB);
  }
});

DB.sequelize = sequelize;
DB.Sequelize = Sequelize;

module.exports = DB;
