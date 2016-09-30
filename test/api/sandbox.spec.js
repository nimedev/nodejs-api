/* global describe, it */
/**
 * Test if sandbox have all services that need the application components.
 * @module sandbox.spec
 */
'use strict'

// Set test environment
process.env.NODE_ENV = 'test'

// npm modules
const chai = require('chai')

// Server
const server = require('../../server')

// Constants & Variables
const sandbox = server.sandbox

// Chai styles
const expect = chai.expect

// Run test for api sandbox
describe('Sandbox content', () => {
  // Services from user component
  it('User should register services', () => {
    expect(sandbox.hasAnswer('findingUserById')).to.equal(true)
  })
})