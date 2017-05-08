/**
 * @module user
 */

'use strict'

const controller = require('./user.controller')
const userDAO = require('./user.dao')

/**
 * Load user component and try to register tools in a sandbox
 * @param {Object} apiRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (apiRouter, sandbox) => {
  // Register tools to share in sandbox
  sandbox.answer('findingUserById', userDAO.findingUserById)

  // Attach module router to a parent router
  apiRouter.use(controller())
}
