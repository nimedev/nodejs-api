/**
 * Common actions for crud operations
 * @module database
 */
'use strict'

// npm modules
const mongoose = require('mongoose')

/**
 * Create a query for find function of mongoose.
 * @param {Object} model - mongoose model.
 * @param {Object} query - mongodb selector.
 * @param {Object} projection - optional fields to return of each doc.
 * @param {Array/Object} populate - A object or array of object to create
 * @param {Object} page - page to get.
 * @param {Object} limit - maximun of documents to get.
 *  populate functions.
 *  object = {
 *    property: '_states',
 *    projection: { removed: 1 }
 *  }
 * @returns {Promise} mongoose promise
 */
const finding = (model, query, projection = {}, populate = [], page = 0,
  limit = 0) => {
  populate = (Array.isArray(populate)) ? populate : [populate]
  const cursor = model.find(query, projection)

  // Prepare the query
  cursor.skip(page * limit)
  cursor.limit(limit)

  // Check if populate
  for (let obj of populate) {
    cursor.populate(obj.property, obj.projection)
  }

  // Return the query
  return cursor.exec()
}

/**
 * Create a query for findOne function of mongoose.
 *
 * @param {Object} model - mongoose model.
 * @param {Object} query - mongodb selector.
 * @param {Object} projection - optional fields to return of each doc.
 * @param {Array/Object} populate - An array or object of mongoose populate
 *  object:
    {
      path: 'fans',
      match: { age: { $gte: 21 }},
      select: { name: 1 , _id: 0}, // or 'name -_id'
      options: { limit: 5 }
    }
 *
 * @returns {Promise} mongoose promise
 */
const findingOne = (model, query, projection = {}, populate = []) => {
  const cursor = model.findOne(query, projection)
  populate = Array.isArray(populate) ? populate : [populate]

  // Check if populate
  for (let pathObj of populate) {
    cursor.populate(pathObj)
  }

  // Return the query
  return cursor.exec()
}

/**
 * @param {string} path - name of field that generate the error
 * @param {string} message - custom message
 * @param {string} type - kind of the error (required, duplicated…)
 * @param {string} value - value of path (required, duplicated…)
 *
 * @returns {ValidationError} create a custom error in mongoose style
 */
const validationError = (path, message, type, value) => {
  const ValidationError = mongoose.Error.ValidationError
  const ValidatorError = mongoose.Error.ValidatorError
  const error = new ValidationError(null)
  error.errors[path] = new ValidatorError({ path, message, type, value })
  return error
}

/**
 * Common functions for CRUD operations
 */
module.exports = Object.freeze({
  finding,
  findingOne,
  validationError
})