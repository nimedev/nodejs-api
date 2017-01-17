/**
 * Functions used in error-handler module
 * @module error-handler.tools
 */

/**
 * Log error.
 * @param {Object/Error} error - error to log
 */
// eslint-disable-next-line no-console
const errorLogger = error => console.error(error.stack)

module.exports = Object.freeze({
  errorLogger
})
