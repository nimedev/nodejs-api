/**
 * @module database
 */

const pool = require('./database.pool')
const service = require('./database.service')

module.exports = Object.freeze({
  /** Pool of connections to application databases */
  pool,

  /** Common actions for crud operations */
  service
})
