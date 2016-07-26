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
const mongoose = require('mongoose')

// App modules
const components = require('./components')
const appConfig = require('./config')
const configExpress = require('./config-express')
const routes = require('./routes')
const Sandbox = require('./sandbox')

// Get jspm dependencies from package.json
const appSetting = require('../package')

// Constants & Variables
// Define our app using express
const app = express()
const apiRouter = express.Router()

// Create a sandbox object to record modules
const sandbox = new Sandbox()

// APP CONFIGURATION ==================
// ====================================
// Connect to database
mongoose.Promise = global.Promise
mongoose.connect(appConfig.mongo.uri, appConfig.mongo.options)
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

// Populate DB with sample data
// if(config.seedDB) { require('./config/seed') }

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
  console.log('NODEJS-API %s running on port %d, in %s mode',
    appSetting.version, appConfig.port, app.get('env'))
})