/**
 * Common actions for crud operations
 * @module database
 */
'use strict'

/** Common functions for CRUD operations */
module.exports = {
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
  finding(model, query, projection = {}, populate = [], page = 0, limit = 0) {
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
}