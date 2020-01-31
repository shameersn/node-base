module.exports = {
  development: {
    username: process.env.TENANT_DB_USER_NAME,
    password: process.env.TENANT_DB_PASSWORD,
    database: process.env.TENANT_DB_NAME,
    host: process.env.TENANT_DB_HOST_URL,
    dialect: process.env.TENANT_DB_DIALECT,
    dialectOptions: {},
  },
  production: {
    username: process.env.TENANT_DB_USER_NAME,
    password: process.env.TENANT_DB_PASSWORD,
    database: process.env.TENANT_DB_NAME,
    host: process.env.TENANT_DB_HOST_URL,
    dialect: process.env.TENANT_DB_DIALECT,
    dialectOptions: {},
  },
};
