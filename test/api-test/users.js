/* global describe, before, it */
/**
 * Tests for users routes
 * @users
 * @memberOf api-test
 */

// npm modules
const chai = require('chai')

// User modules
const User = require('../../server/components/user/user.schema')

// Sibblings & Childs modules
const helpers = require('./helpers')

/**
 * Run test for users routes
 */
module.exports = server => {
  // Parent block
  describe('User', () => {
    let userID

    /**
     * Remove all related with users
     */
    before(done => {
      User.remove({}).exec()
        .then(() => done())
    })

    /**
     * Test /POST route
     */
    describe('/POST users', () => {
      const url = '/api/users'

      // Error responses
      it('it should not POST a user without email field', done => {
        const user = {
          role: 'user'
        }
        helpers
          .testPostError(server, url, user, 422, 'InvalidEmail', done)
      })
      it('it should not POST a user without role field', done => {
        const user = {
          email: 'user@mail.com'
        }
        helpers
          .testPostError(server, url, user, 422, 'InvalidRole', done)
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
            res.should.have.status(201)
            res.body.should.be.a('object')
            res.body.should.have.property('user')
            res.body.user.should.have.property('_id')
            res.body.user.should.have.property('role').eql('user')
            userID = res.body.user._id
            done()
          })
      })
      it('it should not POST a user if already exits', done => {
        const user = {
          email: 'user@ygh.test',
          role: 'user'
        }
        helpers
          .testPostError(server, url, user, 422, 'EmailAlreadyExits', done)
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
            res.should.have.status(201)
            res.body.should.be.a('object')
            res.body.should.have.property('user')
            res.body.user.should.have.property('_id')
            res.body.user.should.have.property('role').eql('admin')
            done()
          })
      })
    })

    /**
     * Test /GET route
     */
    describe('/GET users', () => {
      const url = '/api/users'

      // Get all users
      it('it should GET all users', done => {
        chai.request(server)
          .get(url)
          .end((err, res) => {
            res.should.have.status('200')
            res.body.should.be.a('array')
            res.body.length.should.be.eql(2)
            done()
          })
      })
    })

    /**
     * Test /GET/:userID route
     */
    describe('/GET/:userID user', () => {
      const url = '/api/users'
      it('it should GET a user by the given id', done => {
        chai.request(server)
          .get(`${url}/${userID}`)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('email')
            res.body.should.have.property('role')
            res.body.should.have.property('creationDate')
            res.body.should.have.property('_id').eql(userID)
            done()
          })
      })
      it('it should not GET a user if not find id', done => {
        chai.request(server)
          .get(`${url}/000000000000000000000000`)
          .end((err, res) => {
            res.should.have.status(404)
            res.body.should.be.a('object')
            res.body.should.have.property('name').eql('UserNotFound')
            done()
          })
      })
    })
  })
}