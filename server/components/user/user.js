/**
 * Prepare component for users routes
 * @module user
 */
'use strict'

// Component modules
const userSandbox = require('./user-sandbox')
const controller = require('./user.controller')
const service = require('./user.service')

/**
 * Load user component and try to register services in a sandbox
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  if (!sandbox) return console.log(`Can not register user component in sandbox`)

  // Set reference to main sandbox
  userSandbox.setMainSandbox(sandbox)

  // Register services in sandbox
  sandbox.register(service.findingUserById, 'findingUserById')

  // Attach module router to a parent router
  parentRouter.use(controller())
  console.log('user component created!')
}