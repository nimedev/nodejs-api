/**
 * A map with custom error for user component
 * @module user-error.map
 */
'use strict'

// Create custom errors
const errors = new Map([
  /** Used for email that have bad syntax */
  ['InvalidEmail', {
    name: 'InvalidEmail',
    message: 'Invalid email',
    status: 422,
    field: 'email'
  }],

  /** Used when role is invalid */
  ['InvalidRole', {
    name: 'InvalidRole',
    message: 'Invalid role',
    status: 422,
    field: 'role'
  }],

  /** The user already is in db */
  ['EmailAlreadyExits', {
    name: 'EmailAlreadyExits',
    message: 'Email is already taken',
    status: 422,
    field: 'email'
  }],

  /** Could not find the user */
  ['UserNotFound', {
    name: 'UserNotFound',
    message: 'User not found',
    status: 404,
    field: 'email'
  }]
])

/**
 * Map of errors for user component
 */
module.exports = errors