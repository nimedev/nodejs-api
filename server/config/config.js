/**
 * @module config
 */

'use strict'

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
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
})