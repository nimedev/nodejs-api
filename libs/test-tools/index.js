/**
 * Functions used in tests
 * @module test-tools
 */

'use strict'

const { checkResponseError } = require('./api-error.test')
const { checkErrorsProperty } = require('./validation-error.test')

module.exports = Object.freeze({
  checkResponseError,
  checkErrorsProperty,
})