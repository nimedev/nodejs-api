/* global describe, before, it */

'use strict'

// Set env variables to test and run the server
process.env.NODE_ENV = 'test'
require('../../../server')

const chai = require('chai')
const testTools = require('../../../../test/tools')
const userTools = require('./user.tools')

const expect = chai.expect

// Parent block
describe('user.tools module', () => {
  const newUser = {
    email: 'user@mail.com',
    role: 'user'
  }
  before((done) => {
    userTools.removingAllUsers().then(() => done())
  })

  it('it should not create a user without required inputs', (done) => {
    userTools
      .creatingUser({})
      .catch((err) => {
        expect(err).to.be.instanceof(Error)
        expect(err).to.have.property('name').eql('ValidationError')
        expect(err).to.have.property('errors').to.be.an('object')
        testTools.checkErrorsProperty(err.errors, 'email', 'required', undefined)
        testTools.checkErrorsProperty(err.errors, 'role', 'required', undefined)
        done()
      })
  })

  it('it should create a user', (done) => {
    userTools
      .creatingUser(newUser)
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should not create a user if alreade exits', (done) => {
    userTools
      .creatingUser(newUser)
      .catch((err) => {
        expect(err).to.be.instanceof(Error)
        expect(err).to.have.property('name').eql('ValidationError')
        expect(err).to.have.property('errors').to.be.an('object')
        testTools.checkErrorsProperty(err.errors, 'email', 'duplicated', newUser.email)
        done()
      })
  })

  it('it should not find a user if not exits', (done) => {
    userTools
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
    userTools
      .findingUser({
        email: newUser.email
      })
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should get a list of user', (done) => {
    userTools
      .listingUsers()
      .then((users) => {
        expect(users).to.be.an('array')
        expect(users.length).eql(1)
        expect(users[0].email).eql(newUser.email)
        done()
      })
  })
})
