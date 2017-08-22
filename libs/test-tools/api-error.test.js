/**
 * Functions to test errors returned by the API
 * @module api-error.test
 * @member test-tools
 */

'use strict'

const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Check a common error returned by the API.
 * @param {Object} res - recieved response
 * @param {Object} status - expected status code of response
 * @param {Object} name - expected error name
 */
const checkResponseError = (res, status, name) => {
  expect(res).to.have.status(status)
  expect(res.body).to.be.a('object')
  expect(res.body).to.have.property('name').eql(name)
  name === 'ValidationError' && expect(res.body).to.have.property('errors')
}

module.exports = Object.freeze({
  checkResponseError,
})