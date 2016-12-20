/**
 * @module response-error
 */

'use strict'

/**
 * Send error in json format using the status code
 *
 * @param {Object} res - response object.
 * @param {Object} err - error object or name of the error.
 */
module.exports = (res, err) => {
  // If error don't have status add a 500 response code
  const status = err.status || ((err.name === 'ValidationError') ? 422 : 500)

  // respose with custom error
  res.status(status).json(err)
}