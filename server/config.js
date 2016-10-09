/**
 * @module config
 */
'use strict'

// Constants & Variables
const mongoSuffix = process.env.NODE_ENV === 'test' ? '-test' : ''

/**
 * Settings for API
 */
module.exports = Object.freeze({
  // Environment
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT ||
  process.env.NODEJS_API_PORT || process.env.PORT || 8080,

  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

  // MongoDB connection options
  mongo: {
    // Define a object by connection
    default: {
      // Url according with environment variables
      uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL
      || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
      || process.env.NODEJS_API_MONGODB_URI || `mongodb://localhost:27017/nodejs-api${mongoSuffix}`,

      // Setting for moongoose
      options: { db: { safe: true } }
    }
  },

  // Settings for database
  database: {
    // Max of documents in find query
    limit: 100
  }
})