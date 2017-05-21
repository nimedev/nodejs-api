/* global describe, before, it */

'use strict'

// Set env variables to test and run the server
process.env.NODE_ENV = 'test'

const chai = require('chai')

const testTools = require('../../../__tests__/tools')
const mongooseConnect = require('../../../libs/mongoose-connect')
const userConfig = require('../user.config')
const userDAM = require('./user.dam')

const expect = chai.expect

// Create the database connection
mongooseConnect(userConfig.mongoose)

// Parent block
describe('user.dam module', () => {
  const newUser = {
    email: 'user@mail.com',
    role: 'user'
  }
  before((done) => {
    userDAM.removingAllUsers().then(() => done())
  })

  it('it should not create a user without required inputs', (done) => {
    userDAM
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
    userDAM
      .creatingUser(newUser)
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should not create a user if alreade exits', (done) => {
    userDAM
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
    userDAM
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
    userDAM
      .findingUser({
        email: newUser.email
      })
      .then((user) => {
        expect(user).to.be.an('object')
        done()
      })
  })

  it('it should get a list of user', (done) => {
    userDAM
      .listingUsers()
      .then((users) => {
        expect(users).to.be.an('array')
        expect(users.length).eql(1)
        expect(users[0].email).eql(newUser.email)
        done()
      })
  })
})
