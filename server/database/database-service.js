/**
 * Common actions for crud operations
 * @module database-service
 */

'use strict'

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
  let { page, size } = paging

  // Check if populate
  popArray.forEach(populateObj => cursor.populate(populateObj))

  // Add sort method
  cursor.sort(sort)

  // Paging configuration. Only positive numbers
  if (page) page = parseInt(page, 10)
  if (size) size = parseInt(size, 10)
  page && size && cursor.skip((page - 1) * size)
  size && cursor.limit(size)

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
 * Common functions for CRUD operations
 */
module.exports = Object.freeze({
  finding,
  findingOne
})
