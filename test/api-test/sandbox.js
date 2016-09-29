/* global describe, it */
/**
 * Test if sandbox have all services that need the application components.
 * @module sandbox
 * @memberOf api-test
 */
'use strict'

// npm modules
const chai = require('chai')

// Chai styles
const expect = chai.expect

/**
 * Run test for api sandbox
 */
module.exports = sandox => {
  describe('Sandbox content', () => {
    // Services from user component
    it('user should register services', () => {
      expect(sandox.hasAnswer('findingUserById')).to.equal(true)
    })
  })
}