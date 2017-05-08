/**
 * Set routes for all application
 * @module routes
 */

'use strict'

/** Set server routes */
// ==================
module.exports = (app) => {
  // Dummy route
  app.route('/').get((req, res) => res.send('Welcome to nimedev`s nodejs API seed'))
}
