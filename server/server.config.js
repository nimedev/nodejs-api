/**
 * @module server.config
 */

'use strict'

const config = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.NODEJS_API_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || undefined
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nserver.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)
