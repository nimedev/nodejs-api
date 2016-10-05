/* global describe, it */
/**
 * Test components module
 * @module components.spec
 */
'use strict'

// Require first the server
const server = require('../server')

// npm modules
const chai = require('chai')

// Constants & Variables
const sandbox = server.sandbox

// Chai styles
const expect = chai.expect

// Parent blck
describe('Components module', () => {
  // Services from user component
  it('User should register services', () => {
    expect(sandbox.hasAnswer('findingUserById')).to.equal(true)
  })
})