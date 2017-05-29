/**
 * Logger to handle the log functions
 * @module error-logger
 */

'use strict'

/**
 * Log error.
 * @param {Object/Error} error - error to log
 */
// eslint-disable-next-line no-console
const errorLogger = error => console.error(error.stack)

module.exports = errorLogger