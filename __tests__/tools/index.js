/**
 * Functions used in tests
 * @module tools
 * @member test
 */

'use strict'

const { checkResponseError } = require('./api-error')
const { checkErrorsProperty } = require('./validation-error')

module.exports = Object.freeze({
  checkResponseError,
  checkErrorsProperty,
})