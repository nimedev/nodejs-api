/**
 * Functions used in tests
 * @module tools
 * @member test
 */

'use strict'

const apiError = require('./api-error')
const validationError = require('./validation-error')

module.exports = Object.freeze(
  Object.assign({},
    apiError,
    validationError
  )
)