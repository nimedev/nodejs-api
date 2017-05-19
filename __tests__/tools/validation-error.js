/**
 * Functions to test a ValidationError.
 * @module validation-error
 * @member test/tools
 */

'use strict'

const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Test a error object in a errors object of ValidationError
 * @param {Object} errors - object of ValidationError
 * @param {String} path
 * @param {String} kind
 * @param {String} value
 * @param {Boolean} isSubschema - Indicate if the path point to a mongoose subchema
 * @param {String} name - Use in some case that Validator name is other like 'CastError'
 */
const checkErrorsProperty = (errors, path, kind, value = null, isSubschema = false, name = 'ValidatorError') => {
  // Validate if errors have the validator object according width the path
  expect(errors).to.have.property(path)

  // Validate the validator object from errors
  const err = errors[path]
  const expectedPath = isSubschema ? path.split('.').pop() : path
  expect(err).to.have.property('name').eql(name)
  expect(err).to.have.property('path').eql(expectedPath)
  expect(err).to.have.property('kind').eql(kind)
  value !== null && expect(err).to.have.property('value').eql(value)
}

module.exports = Object.freeze({
  checkErrorsProperty
})
