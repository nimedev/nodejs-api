/**
 * @module user.config
 */

'use strict'

const { normalizeUri } = require('./../../libs/database-tools')
const { defaultMongoUri } = require('./../../config')

const config = {
  mongoose: {
    // Url according with environment variables
    uri: normalizeUri(process.env.YOGH_ACCOUNT_MONGODB_URI) || defaultMongoUri,

    // Setting for moongoose
    options: {
      db: {
        safe: true,
      },
    },
  },
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nuser.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)