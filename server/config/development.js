/** @module development */
'use strict'

// App modules
const Environment = require('./environment')

/**
 * Class representing development specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a development configuration object
   */
  constructor() {
    super()

  }
}