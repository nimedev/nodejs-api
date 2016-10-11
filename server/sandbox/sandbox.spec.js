/* global describe, it */
/**
 * Test for sandbox module
 * @module sandbox.spec
 */
'use strict'

// Set the env variable to test
process.env.NODE_ENV = 'test'

// npm modules
const chai = require('chai')

// module to test
const sandboxFactory = require('./sandbox')

// Chai styles
const expect = chai.expect

// Test
describe('Sandbox module', () => {
  const sandbox = sandboxFactory()
  it('register a question', () => {
    // Try to save a function
    let result = sandbox.answer('callback',
      (value1, value2) => `${value1} and ${value2}`)
    expect(result).to.equal(true)

    // Try to save a function again
    result = sandbox.answer('callback',
      () => 'return other function')
    expect(result).to.equal(false)

    // Try to save a object
    result = sandbox.answer('any', { name: 'test' })
    expect(result).to.equal(true)

    // Try to override a question
    result = sandbox.answer('any', 'new question')
    expect(result).to.equal(true)
  })

  it('ask for a question that have a function', () => {
    // Ask for a function
    let answer = sandbox.ask('callback', 'hi', 'bye')
    expect(answer).to.equal('hi and bye')

    // Ask for any different to a function
    answer = sandbox.ask('any')
    expect(answer).to.equal(null)
  })

  it('ask for a question that have any different to a function', () => {
    // Ask for a function
    let answer = sandbox.askValue('any')
    expect(answer).to.be.a('string')
    expect(answer).to.equal('new question')

    // Try to ask for the value of a callback function
    answer = sandbox.askValue('callback')
    expect(answer).to.equal(undefined)
  })

  it('check for a question', () => {
    let result = sandbox.hasAnswer('callback')
    expect(result).to.equal(true)
    result = sandbox.hasAnswer('other question')
    expect(result).to.equal(false)
  })
})