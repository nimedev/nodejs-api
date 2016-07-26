/** @module production */
'use strict'

// App modules
const Environment = require('./environment')

/**
 * Class representing production specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a production configuration object
   */
  constructor() {
    super()

  }
}