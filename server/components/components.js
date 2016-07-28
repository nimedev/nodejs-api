/**
 * Used to load all components
 * @module components
 */

/**
 * Initialize components
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  // Require the modules here to only call the modules when run the function
  // and avoid load modules when load this module
  require('./users')(parentRouter, sandbox)
}