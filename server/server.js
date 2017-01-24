/**
 * Main application file
 * @module server
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Set root application path in global object
global.baseDir = __dirname

// eslint-disable-next-line no-console
console.log('====================================')

// BASE SETUP
// ======================================
const express = require('express')
const appSetting = require('../package')
const components = require('./components')
const appConfig = require('./config')
const database = require('./database')
const errorHandler = require('./error-handler')
const expressSetup = require('./express-setup')
const routes = require('./routes')
const sandboxFactory = require('./sandbox')


// Constants & Variables
// Define our app using express
const app = express()
const apiRouter = express.Router()

// Create a sandbox object to record modules
const sandbox = sandboxFactory()

// APP CONFIGURATION ==================
// ====================================
// Connect to database
database.connect()

// Setup express middleware
expressSetup(app)

// LOAD COMPONENTS ====================
// ====================================
components(apiRouter, sandbox)

// Set api routes
app.use('/api', apiRouter)

// ROUTES =============================
// ====================================
routes(app, sandbox)

// ERROR HANDLER ======================
// ====================================
errorHandler.middleware(app)

// START THE SERVER
// ====================================
app.listen(appConfig.port, appConfig.ip, () => {
  // eslint-disable-next-line no-console
  console.log(`
NODEJS-API ${appSetting.version}
Running with NodeJS ${process.version}`)
})

// Export for testing
module.exports = {
  app,
  sandbox
}
