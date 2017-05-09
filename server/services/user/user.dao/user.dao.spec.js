/* global describe, before, it */
/**
 * Tests for user.dao module
 * @module user.dao.spec
 */

'use strict'

// Set env variables to test and run the server
process.env.NODE_ENV = 'test'
require('../../../server')

const chai = require('chai')
const testValidationError = require('../../../../test/helpers/test-validaton-error')
const userDAO = require('./user.dao')

const expect = chai.expect

// Parent block
describe('user.dao module', () => {
  const newUser = {
    email: 'user@mail.com',
    role: 'user'
  }
  before((done) => {
    userDAO.removingAllUsers().then(() => done())
  })

  it('it should not create a user without required inputs', (done) => {
    userDAO
      .creatingUser({})
      .catch((err) => {
        expect(err).to.be.instanceof(Error)
        expect(err).to.have.property('name').eql('ValidationError')
        expect(err).to.have.property('errors').to.be.an('object')
        testValidationError.checkValidatorError(err.errors.email, 'required', 'email', undefined)
        testValidationError.checkValidatorError(err.errors.role, 'required', 'role', undefined)
        done()
      })
  })

  it('it should create a user', (done) => {
    userDAO
      .creatingUser(newUser)
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should not create a user if alreade exits', (done) => {
    userDAO
      .creatingUser(newUser)
      .catch((err) => {
        expect(err).to.be.instanceof(Error)
        expect(err).to.have.property('name').eql('ValidationError')
        expect(err).to.have.property('errors').to.be.an('object')
        testValidationError.checkValidatorError(err.errors.email, 'duplicated', 'email', newUser.email)
        done()
      })
  })

  it('it should not find a user if not exits', (done) => {
    userDAO
      .findingUser({
        email: 'no@mail.com'
      })
      .catch((err) => {
        expect(err).to.be.instanceof(Error)
        expect(err).to.have.property('name').eql('UserNotFound')
        expect(err).to.have.property('status').eql(404)
        done()
      })
  })

  it('it should find a user', (done) => {
    userDAO
      .findingUser({
        email: newUser.email
      })
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should get a list of user', (done) => {
    userDAO
      .listingUsers()
      .then((users) => {
        expect(users).to.be.an('array')
        expect(users.length).eql(1)
        expect(users[0].email).eql(newUser.email)
        done()
      })
  })
})
