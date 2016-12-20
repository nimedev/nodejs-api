/**
 * Used to load all components
 * @module components
 */

'use strict'

/* eslint-disable global-require */

/**
 * Initialize components
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  // Require the modules here to only call the modules when run the function
  // and avoid load modules when load this module
  require('./user')(parentRouter, sandbox)
}