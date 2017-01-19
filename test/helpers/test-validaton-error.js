/**
 * Functions to test a ValidationError.
 * @module test-validation-error
 * @member test/helpers
 */

const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Test a ValidatorError object
 */
const checkValidatorError = (err, kind, path, value) => {
  expect(err).to.have.property('kind').eql(kind)
  expect(err).to.have.property('path').eql(path)
  value !== null && expect(err).to.have.property('value').eql(value)
}

module.exports = Object.freeze({
  checkValidatorError
})
