/**
 * Set global middleware for all app
 * @module express-setup
 */

const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const errorHandler = require('errorhandler')
const morgan = require('morgan')

/**
 * Set express middleware
 */
module.exports = (app) => {
  const env = app.get('env')

  // Use body parser so we can grab information from POST requests
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())

  // Configure our app to handle CORS requests
  app.use(cors())

  // Compact JSON responses and the static files to GZIP format.
  app.use(compression())

  // Settings for development environment
  if (env === 'development') {
    // Log all requests to the console
    app.use(morgan('combined'))

    // Error handler - has to be last
    app.use(errorHandler())
  }
}
