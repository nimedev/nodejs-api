/**
 * Prepare component for users routes
 * @module users
 */
'use strict'

// Component modules
const controller = require('./users.controller')
const services = require('./users.services')

/**
 * Load users component and try to register the User model in a sandbox
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  if (!sandbox) return console.log(`Can not register users model in sandbox`)

  // Register services in sandbox
  sandbox.register(services.findingUserById, 'findingUserById')

  // Attach module router to a parent router
  parentRouter.use(controller(sandbox))
}