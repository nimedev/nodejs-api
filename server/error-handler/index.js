/**
 * @module error-handler
 */

'use strict'

const customError = require('./custom-error')
const tools = require('./error-handler.tools')
const middleware = require('./middleware')

module.exports = Object.freeze(Object.assign({
  middleware
}, customError, tools))
