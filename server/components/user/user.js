/**
 * Prepare component for users routes
 * @module user
 */

'use strict'

// Component modules
const controller = require('./user.controller')
const userDAO = require('./user.dao')

/**
 * Load user component and try to register services in a sandbox
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  // Register services to share in sandbox
  sandbox.answer('findingUserById', userDAO.findingUserById)

  // Attach module router to a parent router
  parentRouter.use(controller())
}
