/**
 * @module dummy
 */

const appConfig = require('../config')

/**
 * Dummy middleware
 */
module.exports = Object.freeze({
  /**
   * Show a dummy message in console
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @param {Object} next - next middleware object
   */
  useDummy: (req, res, next) => {
    // eslint-disable-next-line no-console
    appConfig.env !== 'test' && console.log('DUMMY MIDDLEWARE')
    next()
  }
})
