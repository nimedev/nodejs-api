/**
 * @module user.dao
 */
'use strict'

// Component modules
const User = require('./user.schema')

/** Services for users module */
module.exports = Object.freeze({
  findingUserById
})

/**
 * Get user document by id.
 * @param {string} _id - id of user to get profile.
 * @param {Object} projection - Properties of the document to return
 * @param {Array/Object} populate - A object or array of object to create
 *  populate functions.
 *  object = {
 *    property: '_states',
 *    projection: { removed: 1 }
 *  }
 * @returns {Promise} Mongoose exec() promise
 */
function findingUserById(_id, projection, populate = []) {
  populate = (Array.isArray(populate)) ? populate : [populate]
  const cursor = User.findOne({
    removed: false,
    _id
  }, projection)

  // Check if populate
  for (let obj of populate) {
    cursor.populate(obj.property, obj.projection)
  }

  // Find by id and user who are not been removed.
  return cursor.exec()
}