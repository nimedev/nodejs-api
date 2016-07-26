/**
 * Configurations for all environments
 * @module environment
 */
'use strict'

/**
 * Class representing configurations for all environments
 * @class Environment
 */
module.exports = class {
  /**
   * Create a environment object
   */
  constructor() {
    // Environment
    this.env = process.env.NODE_ENV

    // Server port
    this.port = process.env.OPENSHIFT_NODEJS_PORT ||
      process.env.NODEJS_API_PORT || process.env.PORT || 8081

    // Server IP
    this.ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined

    // MongoDB connection options
    this.mongo = {
      // Url according with environment variables
      uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL
      || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
      || process.env.NODEJS_MONGODB_URI || 'mongodb://localhost:27017/nodejs-api',

      // Setting for moongoose
      options: {
        db: {
          safe: true
        }
      }
    }

    // Settings for database
    this.database = {
      // Max of documents in find query
      limit: 100
    }
  }
}