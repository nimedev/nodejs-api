/** @module dummy */
'use strict'

/** Dummy middleware */
module.exports = {
  /**
   * Show a dummy message in console
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @param {Object} next - next middleware object
   */
  useDummy: (req, res, next) => {
    console.log('DUMMY MIDDLEWARE')
    next()
  }
}