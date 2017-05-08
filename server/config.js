/**
 * Settings for API
 * @module config
 */

'use strict'

const config = {
  // Environment
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.NODEJS_API_PORT || process.env.PORT || 8080,

  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nconfig:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)
