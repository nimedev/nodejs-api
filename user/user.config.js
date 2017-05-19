/**
 * Settings for API
 * @module config
 */

'use strict'

const mongoSuffix = process.env.NODE_ENV === 'test' ? '-test' : ''

const config = {
  server: {
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.NODEJS_API_USER_PORT || 8081,
    ip: process.env.OPENSHIFT_NODEJS_IP || undefined
  },
  mongoose: {
    // Url according with environment variables
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
    process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME ||
    process.env.NODEJS_API_USER_MONGODB_URI ||
    `mongodb://localhost:27017/nodejs-api:user${mongoSuffix}`,

    // Setting for moongoose
    options: {
      db: {
        safe: true
      }
    }
  }
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nuser.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)
