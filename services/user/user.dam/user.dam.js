/**
 * Data Access module (DAM) for User model
 * @module user.dam
 */

'use strict'

const { finding, findingOne } = require('../../../libs/database-tools')
const { validationError } = require('../../../libs/error-tools')
const { User } = require('../user.model')
const userError = require('../user-error')

/**
 * Create a user document
 * @param {Object} user - data of the user to create:
    {
      email: 'user@ygh.test',
      role: 'user',
    }
 * @returns {Promise} Resolve with the new document if can create user.
 */
const creatingUser = (user) => {
  // Create a new user
  delete user._id
  const newUser = new User(user)

  // Save new user and send token
  return newUser.save()
    .catch((err) => {
      let newErr = err

      // Override error if is a duplicated key error
      if (err.code === 11000) {
        newErr = validationError('email', 'User already exits', 'duplicated', user.email)
      }
      return Promise.reject(newErr)
    })
}

/**
 * Get user document by id.
 * @param {string} query - mongo query object.
 * @param {Object} projection - optional fields to return of each doc.
 * @param {Array/Object} populate - An array or object of mongoose populate
 *  object:
    {
      path: 'fans',
      match: { age: { $gte: 21 }},
      select: { name: 1 , _id: 0}, // or 'name -_id'
      options: { limit: 5 }
    }
 * @returns {Promise} Resolve if find the user. Return the finded user object.
 */
const findingUser = (query, projection, populate) => (
  findingOne(User, query, projection, populate)
    .then((user) => {
      // Reject the promise if no find user and not error happends
      if (!user) return Promise.reject(userError('UserNotFound'))

      // Otherwise resolve with user
      return user
    })
)

/**
 * Get a array of users
 * @param {Rest params} params - extendable parameters passed to finding
 *  function of database module (Don't pass de model).
 * @returns {Promise} Mongoose exec() promise
 */
const listingUsers = (...params) => finding(User, ...params)

/**
 * Remove all documents (only in test environment)
 * @returns {Promise} mongoose remove.exec() promise
 */
const removingAllUsers = () => User.remove({}).exec()

/**
 * Services for user module
 */
module.exports = Object.freeze({
  creatingUser,
  findingUser,
  listingUsers,
  removingAllUsers: process.env.NODE_ENV === 'test' ? removingAllUsers : undefined,
})