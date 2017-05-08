/**
 * Helpers for test api routes
 * @module test-api
 */

'use strict'

const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Check error according with a request configuration.
 * @param {Object} request - request configuration.
 * @param {number} status - expected status code.
 * @param {string} error - expected name of error.
 * @param {Function} done - callback of it function.
 * @param {Array} errors - expected fields in errors object of error
 *  (Used in ValidationError object)
 */
const checkRequestError = (request, status, error, errors, done) => {
  request
    .end((err, res) => {
      expect(res).to.have.status(status)
      expect(res.body).to.be.a('object')
      expect(res.body).to.have.property('name').eql(error)

      // Validate all errors if have a errors objects
      if (res.body.errors) {
        expect(res.body).to.have.property('errors')
        const errorsFields = Object.keys(res.body.errors)
        expect(errorsFields.length).to.be.eql(errors.length)
        errorsFields.map(field => expect(!!~errors.indexOf(field)).to.be.eql(true))
      }
      done()
    })
}

/**
 * Helpers for test api module
 */
module.exports = Object.freeze({
  checkRequestError
})
