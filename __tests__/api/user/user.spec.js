/* global describe, before, it */

'use strict'

// Set the env variable to test and load server
process.env.NODE_ENV = 'test'
const app = require('../../../server')

const chai = require('chai')
const chaiHttp = require('chai-http')
const userTools = require('../../../functions/user/user.tools')
const testTools = require('../../tools')

// Chai styles
chai.use(chaiHttp)
const expect = chai.expect

// Parent block
describe('User service', () => {
  // Remove all related with users
  before((done) => {
    userTools.removingAllUsers().then(() => done())
  })

  /*
   * POST /api/users
   */
  describe('POST /api/users', () => {
    const url = '/api/users'

    // Error responses
    it('it should not POST a user without any data', (done) => {
      const user = {}
      chai
        .request(app)
        .post(url)
        .send(user)
        .end((err, res) => {
          testTools.checkResponseError(res, 422, 'ValidationError')
          testTools.checkErrorsProperty(res.body.errors, 'email', 'required')
          testTools.checkErrorsProperty(res.body.errors, 'role', 'required')
          done()
        })
    })

    // Create a user
    it('it should POST a user', (done) => {
      const user = {
        email: 'user@mail.test',
        role: 'user'
      }
      chai.request(app)
        .post(url)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201)
          expect(res.body).to.be.a('object')
          expect(res.body).to.have.property('user')
          expect(res.body.user).to.have.property('_id')
          expect(res.body.user).to.have.property('role').eql('user')
          done()
        })
    })
    it('it should not POST a user if already exits', (done) => {
      const user = {
        email: 'user@mail.test',
        role: 'user'
      }
      chai
        .request(app)
        .post(url)
        .send(user)
        .end((err, res) => {
          testTools.checkResponseError(res, 422, 'ValidationError')
          testTools.checkErrorsProperty(res.body.errors, 'email', 'duplicated')
          done()
        })
    })
    it('it should POST a second admin', (done) => {
      const user = {
        email: 'admin@mail.test',
        role: 'admin'
      }
      chai.request(app)
        .post(url)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201)
          expect(res.body).to.be.a('object')
          expect(res.body).to.have.property('user')
          expect(res.body.user).to.have.property('_id')
          expect(res.body.user).to.have.property('role').eql('admin')
          done()
        })
    })
  })

  /*
   * GET /api/users
   */
  describe('GET /api/users', () => {
    const url = '/api/users'

    // Get all users
    it('it should GET all users', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res).to.have.status('200')
          expect(res.body).to.be.a('array')
          expect(res.body.length).to.be.eql(2)
          done()
        })
    })
  })

  /*
   * Test /GET/:userID route
   */
  describe('GET /api/users/:userID', () => {
    const url = '/api/users'
    it('it should not GET a user if not find id', (done) => {
      chai
        .request(app)
        .get(`${url}/000000000000000000000000`)
        .end((err, res) => {
          testTools.checkResponseError(res, 404, 'UserNotFound')
          done()
        })
    })
    it('it should GET a user by the given id', (done) => {
      const user = {
        email: 'user_to_getbyid@mail.test',
        role: 'user'
      }
      userTools
        .creatingUser(user)
        .then((newUser) => {
          chai.request(app)
            .get(`${url}/${newUser._id}`)
            .end((err, res) => {
              expect(res).to.have.status(200)
              expect(res.body).to.be.a('object')
              expect(res.body).to.have.property('email')
              expect(res.body).to.have.property('role')
              expect(res.body).to.have.property('creationDate')
              expect(res.body).to.have.property('_id').eql(newUser.id)
              done()
            })
        })
    })
  })
})
