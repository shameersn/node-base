const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST_URL,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {},
    define: {
      paranoid: true,
      underscored: true,
    },
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST_URL,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {},
  },
};
