/* global describe, before, it */
/**
 * Tests for users routes
 * @users
 * @memberOf api-test
 */
'use strict'

// npm modules
const chai = require('chai')

// User modules
const User = require('../../server/components/user/user.schema')

// Sibblings & Childs modules
const helpers = require('./helpers')

// Chai styles
const expect = chai.expect

/**
 * Run test for users routes
 */
module.exports = server => {
  // Parent block
  describe('User', () => {
    let userID

    // Remove all related with users
    before(done => {
      User.remove({}).exec()
        .then(() => done())
    })

    /*
     * Test /POST route
     */
    describe('POST routes', () => {
      describe('POST /api/users', () => {
        const url = '/api/users'

        // Error responses
        it('it should not POST a user without email field', done => {
          const user = {
            role: 'user'
          }
          const request = chai.request(server).post(url).send(user)
          helpers.checkRequestError(request, 422, 'InvalidEmail', done)
        })
        it('it should not POST a user without role field', done => {
          const user = {
            email: 'user@mail.com'
          }
          const request = chai.request(server).post(url).send(user)
          helpers.checkRequestError(request, 422, 'InvalidRole', done)
        })

        // Create a user
        it('it should POST a user', done => {
          const user = {
            email: 'user@ygh.test',
            role: 'user'
          }
          chai.request(server)
            .post(url)
            .send(user)
            .end((err, res) => {
              expect(res).to.have.status(201)
              expect(res.body).to.be.a('object')
              expect(res.body).to.have.property('user')
              expect(res.body.user).to.have.property('_id')
              expect(res.body.user).to.have.property('role').eql('user')
              userID = res.body.user._id
              done()
            })
        })
        it('it should not POST a user if already exits', done => {
          const user = {
            email: 'user@ygh.test',
            role: 'user'
          }
          const request = chai.request(server).post(url).send(user)
          helpers.checkRequestError(request, 422, 'EmailAlreadyExits', done)
        })
        it('it should POST a second admin', done => {
          const user = {
            email: 'admin@ygh.test',
            role: 'admin'
          }
          chai.request(server)
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
    })

    /*
     * Test /GET route
     */
    describe('GET routes', () => {
      describe('GET /api/users', () => {
        const url = '/api/users'

        // Get all users
        it('it should GET all users', done => {
          chai.request(server)
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
        it('it should not GET a user if not find id', done => {
          const request = chai.request(server).get(`${url}/000000000000000000000000`)
          helpers.checkRequestError(request, 404, 'UserNotFound', done)
        })
        it('it should GET a user by the given id', done => {
          chai.request(server)
            .get(`${url}/${userID}`)
            .end((err, res) => {
              expect(res).to.have.status(200)
              expect(res.body).to.be.a('object')
              expect(res.body).to.have.property('email')
              expect(res.body).to.have.property('role')
              expect(res.body).to.have.property('creationDate')
              expect(res.body).to.have.property('_id').eql(userID)
              done()
            })
        })
      })
    })
  })
}