/**
 * @module database.config
 */

'use strict'

const mongoSuffix = process.env.NODE_ENV === 'test' ? '-test' : ''

/**
 * Setting for mongoDB
 */
module.exports = Object.freeze({
  // Define a object by connection
  connections: {
    default: {
      // Url according with environment variables
      uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
        process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME ||
        process.env.NODEJS_API_MONGODB_URI || `mongodb://localhost:27017/nodejs-api${mongoSuffix}`,

      // Setting for moongoose
      options: {
        db: {
          safe: true
        }
      }
    }
  }
})