/**
 * Select app configurations according to environment
 * @module config
 */
'use strict'

// App Modules
const Environment = require(`./${process.env.NODE_ENV}`)

/**
 * Configurations according with process.env.NODE_ENV environment variable
 */
module.exports = new Environment()