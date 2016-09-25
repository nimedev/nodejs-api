/**
 * Templates for custom error for responses.
 * @module res-error-templates
 * @memberOf response-error
 */
'use strict'

/**
 * List all avaiable errors
 * Error template object:
    {
      name: 'ErrorName',
      messages: 'Shit happends',
      status: 404,
      field: 'email' // Useful to identified the error client forms
    }
 */
// =========================
module.exports = Object.freeze({
  /** Used for email that have bad syntax */
  InvalidEmail: {
    name: 'InvalidEmail',
    message: 'Invalid email',
    status: 422,
    field: 'email'
  },

  /** Used when role is invalid */
  InvalidRole: {
    name: 'InvalidRole',
    message: 'Invalid role',
    status: 422,
    field: 'role'
  },

  /** The user already is in db */
  EmailAlreadyExits: {
    name: 'EmailAlreadyExits',
    message: 'Email is already taken',
    status: 422,
    field: 'email'
  },

  /** Could not find the user */
  UserNotFound: {
    name: 'UserNotFound',
    message: 'User not found',
    status: 404,
    field: 'email'
  }
})