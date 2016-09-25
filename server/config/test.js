/** @module test */
'use strict'

// App modules
const Environment = require('./environment')

/**
 * Class representing test specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a test configuration object
   */
  constructor() {
    super()

    // Add '-test' suffix to uri of al DBs
    for (let prop in this.mongo) {
      this.mongo[prop].uri += '-test'
    }
  }
}