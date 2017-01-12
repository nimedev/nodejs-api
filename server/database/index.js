/**
 * @module database
 */

const pool = require('./database-pool')
const service = require('./database-service')

/**
 * Export connections and services in one object
 */
module.exports = Object.freeze(Object.assign({}, pool, service))
