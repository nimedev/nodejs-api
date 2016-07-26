/**
 * Used to load all components
 * @module components
 */

// Components
const users = require('./users')

/**
 * Initialize components
 * @param {Object} parentRouter - express router to attach module router
 * @param {Object} sandbox - Reference to sandbox object
 */
module.exports = (parentRouter, sandbox) => {
  users(parentRouter, sandbox)
}