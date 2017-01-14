/**
 * Module used to create custom errors for token module
 * @module user-error
 */

const CustomError = require('../../error-handler').CustomError

// Templates to create the errors
const templates = new Map([
  ['UserNotFound', {
    name: 'UserNotFound',
    message: 'User not found',
    status: 404,
    field: 'email'
  }]
])

/**
 * @param {String} name - Name of the error in the templates map.
 * @returns {Error} custom error object according with the error name.
 */
const errorFactory = name => new CustomError(templates.get(name))

module.exports = errorFactory
