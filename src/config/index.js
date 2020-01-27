const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

module.exports = {
  /**
   * environment
   */
  environment: process.env.NODE_ENV,
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * All sequelize related configs
   */
  database: {
    name: process.env.DB_NAME,
    hostUrl: process.env.DB_HOST_URL,
    queryLogging: process.env.DB_QUERY_LOGGING === 'true',
    dialect: process.env.DB_DIALECT,
    charset: process.env.DB_CHARSET,
    collate: process.env.DB_COLLATE,
    readReplicaHostURL: process.env.DB_READ_REPLICA_HOST_URL,
    userName: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    poolMaxConnections: parseInt(process.env.DB_POOL_MAX_CONNECTIONS),
    poolMinConnections: parseInt(process.env.DB_POOL_MIN_CONNECTIONS),
    poolAcquireTime: parseInt(process.env.DB_POOL_ACQUIRE_TIME),
    poolIdleTime: parseInt(process.env.DB_POOL_IDLE_TIME),
    freezeTableName: process.env.DB_FREEZE_TABLE_NAME,
  },

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/lms/chat',
  },

  /**
   * Chat specific configs
   */
  chat: {
    API_REQUEST_URL: process.env.SENDBIRD_API_REQUEST_URL,
    APP_ID: process.env.SENDBIRD_APP_ID,
    MASTER_API_TOKEN: process.env.SENDBIRD_MASTER_API_TOKEN,
  },
};
