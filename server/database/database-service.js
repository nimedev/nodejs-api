/**
 * Common actions for crud operations
 * @module database-service
 */

const mongoose = require('mongoose')

/**
 * Create a query for find function of mongoose.
 * @param {Object} model - mongoose model.
 * @param {Object} query - mongodb selector.
 * @param {Object} projection - optional fields to return of each doc.
 * @param {Array/Object} populate - A object or array of object to create
 *  populate functions.
    {
      property: '_states',
      projection: { removed: 1 }
    }
 * @param {Any} sort - used in shor() function
 * @param {number} paging - paging configuration (see defaultPaging object in
 *  database.config to check object structure).
 * @returns {Promise} mongoose promise
 */
const finding = (model, query, projection = {}, populate = [], sort = {},
  paging = {}) => {
  const cursor = model.find(query, projection)
  const popArray = Array.isArray(populate) ? populate : [populate]

  // Check if populate
  popArray.forEach(populateObj => cursor.populate(populateObj))

  // Add sort method
  cursor.sort(sort)

  // Paging configuration
  paging.page && paging.size && cursor.skip((paging.page - 1) * paging.size)
  paging.size && cursor.limit(parseInt(paging.size, 10))

  // Return the query
  return cursor.exec()
}

/**
 * Create a query for findOne function of mongoose.
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
  const popArray = Array.isArray(populate) ? populate : [populate]

  // Check if populate
  popArray.forEach(populateObj => cursor.populate(populateObj))

  // Return the query
  return cursor.exec()
}

/**
 * @param {string} path - name of field that generate the error
 * @param {string} message - custom message
 * @param {string} type - kind of the error (required, duplicated…)
 * @param {string} value - value of path (required, duplicated…)
 * @returns {ValidationError} create a custom error in mongoose style
 */
const validationError = (path, message, type, value) => {
  const ValidationError = mongoose.Error.ValidationError
  const ValidatorError = mongoose.Error.ValidatorError
  const error = new ValidationError(null)
  error.errors[path] = new ValidatorError({
    path,
    message,
    type,
    value
  })
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
