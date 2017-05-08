/**
 * Used to load all API services
 * @module services
 */

'use strict'

/* eslint-disable global-require */

/**
 * Initialize services
 * @param {Object} apiRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (apiRouter, sandbox) => {
  // Require the modules here to only call the modules when run the function
  // and avoid load modules when load this module
  require('./user')(apiRouter, sandbox)
}
