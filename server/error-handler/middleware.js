/**
 * Resources to create and handle operational error used in API.
 * @module middleware
 * @member error-handler
 */

/**
 * Log errors if not are custom errors (have status or are ValidationError)
 */
const logErrors = (err, req, res, next) => {
  if (!err.status && err.name !== 'ValidationError') {
    console.error(err.stack)
  }
  next(err)
}

/**
 * Send errors to client.
 * If error don't have status add a 500 or 422 response code
 * This is the final handler.
 */
// eslint-disable-next-line no-unused-vars
const clientErrorHandler = (err, req, res, next) => {
  const status = err.status || ((err.name === 'ValidationError') ? 422 : 500)
  res.status(status).send(err)
}

/**
 * Set middleware to handle errors with express.
 * @param {Object} app - Express application
 */
module.exports = (app) => {
  app.use(logErrors)
  app.use(clientErrorHandler)
}
