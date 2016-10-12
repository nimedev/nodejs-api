/**
 * @module user.dao
 */
'use strict'

// App modules
const appConfig = require('../../config')
const databaseService = require('../../database').dbService

// Component modules
const User = require('./user.model').User
const userError = require('./user-error.map')

// Constants & Variables
const validationError = databaseService.validationError

/**
 * Create a user document
 * @param {Object} user - data of the user to create:
    {
      email: 'user@ygh.test',
      role: 'user',
    }
 * @returns {Promise} Resolve with the new document if can create user.
 * Reject the promise if error happends.
 */
const creatingUser = user => {
  return new Promise((resolve, reject) => {
    const newUser = new User({
      email: user.email,
      role: user.role
    })

    // Save new user and send token
    newUser.save()
      .then(resolve)
      .catch(err => {
        // Override error if is a duplicated key error
        if (err.code === 11000) {
          err = validationError(
            'email', 'User already exits', 'duplicated', user.email
          )
        }
        reject(err)
      })
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
 * Reject the promise if don't find a user or a error happends.
 */
const findingUser = (query, projection, populate) => {
  return new Promise((resolve, reject) => {
    // Execute the query.
    databaseService
      .findingOne(User, query, projection, populate)
      .then(user => {
        // Reject the promise if no find user and not error happends
        if (!user) return reject(userError.get('UserNotFound'))

        // Otherwise resolve with user
        resolve(user)
      })
      .catch(reject)
  })
}

/**
 * Get a array of users
 * @param {Rest params} params - extendable parameters passed to finding
 *  function of database module (Don't pass de model).
 * @returns {Promise} Mongoose exec() promise
 */
const listingUsers = (...params) => {
  return databaseService.finding(User, ...params)
}

/**
 * Remove all documents (only in test environment)
 * @returns {Promise} mongoose remove.exec() promise
 */
const removingAllUsers = () => {
  return User.remove({}).exec()
}

/**
 * Services for user module
 */
module.exports = Object.freeze({
  creatingUser,
  findingUser,
  listingUsers,
  removingAllUsers: appConfig.env === 'test' ? removingAllUsers : undefined
})