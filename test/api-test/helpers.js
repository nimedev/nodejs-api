/**
 * Helpers used in test api module
 * @module helpers
 * @memberOf api-test
 */

// npm modules
const chai = require('chai')

/**
 * Helpers for test api module
 */
module.exports = {
  testPostError
}

/**
 * Test a post error
 * @param {Object} server - reference to server app.
 * @param {string} url - POST ulr.
 * @param {Object} data - object to post.
 * @param {string} status - expected status code.
 * @param {string} error - expected name of error.
 * @param {Function} done - callback of it function.
 */
function testPostError(server, url, data, status, error, done) {
  chai.request(server)
    .post(url)
    .send(data)
    .end((err, res) => {
      res.should.have.status(status)
      res.body.should.be.a('object')
      res.body.should.have.property('name').eql(error)
      done()
    })
}