/**
 * A map with custom error for user component
 * @module user-error.map
 */
'use strict'

// Create custom errors
const errors = new Map([
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