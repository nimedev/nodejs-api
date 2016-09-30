/**
 * @module user.dao
 */
'use strict'

// App modules
const database = require('../../database')
const responseError = require('../../response-error')

// Component modules
const User = require('./user.schema')

/**
 * Services for user module
 */
module.exports = Object.freeze({
  creatingUser,
  findingUser,
  listingUsers
})

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
function creatingUser(user) {
  return new Promise((resolve, reject) => {
    // Checks if the user not exists
    database.dbService
      .findingOne(User, { email: user.email })
      .then(doc => {
        // Cancel the creation because there is a user with the same email
        if (doc) return reject(responseError.getByName('EmailAlreadyExits'))

        // Create a new user
        const newUser = new User({
          email: user.email,
          role: user.role
        })

        // Save new user and send token
        newUser.save()
          .then(resolve)
          .catch(reject)
      })
      .catch(reject)
  })
}

/**
 * Get user document by id.
 * @param {string} query - mongo query object.
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
function findingUser(query, populate) {
  return new Promise((resolve, reject) => {
    // Execute the query.
    database.dbService
      .findingOne(User, query, {}, populate)
      .then(user => {
        // Reject the promise if no find user and not error happends
        if (!user) return reject(responseError.getByName('UserNotFound'))

        // Otherwise resolve with user
        resolve(user)
      })
      .catch(reject)
  })
}

/**
 * Get a array of users
 * @returns {Promise} Mongoose exec() promise
 */
function listingUsers() {
  return database.dbService.finding(User, {})
}