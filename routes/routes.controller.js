/**
 * Set routes
 * @module routes.controller
 */

'use strict'

/** Set server routes */
// ==================
module.exports = (app) => {
  // Dummy route
  app.route('/').get((req, res) => res.send('Welcome to nimedev`s nodejs API seed'))

  // Return the name of the servie to show when server start
  return 'routes'
}
