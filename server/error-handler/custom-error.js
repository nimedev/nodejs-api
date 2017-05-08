/**
 * Functions used to create diferent kind of custom errors for the app.
 * @module custom-error
 */

'use strict'

const mongoose = require('mongoose')

/**
 * Class represeting a custom error object
 */
class CustomError extends Error {
  /**
   * Create a error for token module
   * @param {Object} ...restparam - template to create the error
   */
  constructor({
    message,
    name,
    status,
    field
  } = {}) {
    // Get the properties of the error according with the name
    super(message)

    // Set the new properties
    this.name = name
    this.status = status
    this.field = field
  }
}

/**
 * @param {string} path - name of field that generate the error
 * @param {string} message - custom message
 * @param {string} type - kind of the error (required, duplicated…)
 * @param {string} value - value of path (required, duplicated…)
 * @returns {ValidationError} create a custom error in mongoose style
 */
const validationError = (path, message, type, value) => {
  const ValidationError = mongoose.Error.ValidationError
  const ValidatorError = mongoose.Error.ValidatorError
  const error = new ValidationError(null)
  error.errors[path] = new ValidatorError({
    path,
    message,
    type,
    value
  })
  return error
}

module.exports = {
  CustomError,
  validationError
}
