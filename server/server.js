/**
 * Main application file
 * @module server
 */
'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Set root application path in global object
global.__baseDir = __dirname

// BASE SETUP
// ======================================

// npm modules
const express = require('express')

// App modules
const components = require('./components')
const appConfig = require('./config')
const database = require('./database')
const configExpress = require('./config-express')
const routes = require('./routes')
const sandboxFactory = require('./sandbox')

// Get jspm dependencies from package.json
const appSetting = require('../package')

// Constants & Variables
// Define our app using express
const app = express()
const apiRouter = express.Router()

// Create a sandbox object to record modules
const sandbox = sandboxFactory()

// APP CONFIGURATION ==================
// ====================================
// Connect to database
database.dbPool.connect()

// Setup express middleware
configExpress(app)

// LOAD COMPONENTS ====================
// ====================================
components(apiRouter, sandbox)

// Set api routes
app.use('/api', apiRouter)

// ROUTES =============================
// ====================================
routes(app, sandbox)

// START THE SERVER
// ====================================
app.listen(appConfig.port, appConfig.ip, () => {
  // eslint-disable-next-line no-console
  console.log(
    `====================================
NODEJS-API ${appSetting.version}
Port: ${appConfig.port}
Environment: ${app.get('env')}
NodeJS: ${process.version}`
  )
})

// Export for testing
module.exports = {
  app,
  sandbox
}