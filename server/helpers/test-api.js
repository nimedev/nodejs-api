/**
 * Helpers for test api routes
 * @module test-api
 */
'use strict'

// npm modules
const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Helpers for test api module
 */
module.exports = Object.freeze({
  checkRequestError
})

/**
 * Check error according with a request configuration.
 * @param {Object} request - request configuration.
 * @param {number} status - expected status code.
 * @param {string} error - expected name of error.
 * @param {Function} done - callback of it function.
 */
function checkRequestError(request, status, error, done) {
  request
    .end((err, res) => {
      expect(res).to.have.status(status)
      expect(res.body).to.be.a('object')
      expect(res.body).to.have.property('name').eql(error)
      done()
    })
}