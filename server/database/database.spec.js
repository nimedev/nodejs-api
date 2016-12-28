/* global describe, it */
/**
 * Test for database module
 * @module database.spec
 */

// Set the env variable to test
process.env.NODE_ENV = 'test'

const chai = require('chai')
const dbService = require('./database.service')

// Chai styles
const expect = chai.expect

// Parent block
describe('database module', () => {
  it('it should be create a custom error with mongoose style', () => {
    const path = 'email'
    const message = 'Custom error'
    const kind = 'duplicated'
    const error = dbService.validationError(path, message, kind, path)
    expect(error).to.be.a('object')
    expect(error).to.be.have.property('name').eql('ValidationError')
    expect(error).to.be.have.property('errors')
    const errors = error.errors
    expect(errors).to.be.a('object')
    expect(errors).to.be.have.property(path)
    expect(errors[path]).to.be.a('object')
    expect(errors[path]).to.be.have.property('name').eql('ValidatorError')
    expect(errors[path]).to.be.have.property('message').eql(message)
    expect(errors[path]).to.be.have.property('path').eql(path)
    expect(errors[path]).to.be.have.property('kind').eql(kind)
  })
})
