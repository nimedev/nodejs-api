/**
 * @module user
 */

'use strict'

const controller = require('./user.controller')
const userTools = require('./user.tools')

/**
 * Load user component and try to register tools in a sandbox
 * @param {Object} apiRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (apiRouter, sandbox) => {
  // Register tools to share in sandbox
  sandbox.answer('findingUserById', userTools.findingUserById)

  // Attach module router to a parent router
  apiRouter.use(controller())
}
