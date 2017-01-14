/**
 * @module error-handler
 */

const customError = require('./custom-error')
const middleware = require('./middleware')

module.exports = Object.freeze(Object.assign({
  middleware
}, customError))
