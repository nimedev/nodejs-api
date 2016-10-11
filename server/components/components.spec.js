/* global describe, it */
/**
 * Test components module
 * @module components.spec
 */
'use strict'

// Set the env variable to test and load server
process.env.NODE_ENV = 'test'
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