const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const {database} = require('../../../config');

const db = {};

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
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
