/**
 * @module response-error.service
 */
'use strict'

// Sibling & Childs modules
const resErrorTemplates = require('./res-error-templates')

/** Functions to control the error response */
module.exports = Object.freeze({
  /**
   * @param {string} errName - name of the error to get from data resources
   * @returns {Object} Custom error from templates
   */
  getByName(errName) {
    return resErrorTemplates[errName]
  },

  /**
   * Get error from list of errors and send in json format using the status code
   * @param {Object} res - response object.
   * @param {Object} err - error object or name of the error.
   */
  send(res, err) {
    const error = (typeof err === 'string') ? resErrorTemplates[err] : err

    // If error don't have status add a 500 response code
    const status = error.status || 500

    // respose with custom error
    res.status(status).json(error)
  }
})