/**
 * Main application file
 * @module server
 */

'use strict'

// eslint-disable-next-line no-console
console.log('====================================')

const express = require('express')

const routesRouter = require('../functions/routes')
const userRouter = require('../functions/user')

const appSetting = require('../package')
const errorHandler = require('./error-handler')
const expressSetup = require('./express-setup')
const serverConfig = require('./server.config')

const { port, ip } = serverConfig

// BASE SETUP
// ======================================

// Define our app using express
const app = express()

// APP CONFIGURATION ==================
// ====================================
// Setup express middleware
expressSetup(app)

// LOAD SERVICES ======================
// ====================================
app.use('/api', routesRouter)
app.use('/api', userRouter)

// ERROR HANDLER ======================
// ====================================
errorHandler(app)

// START THE SERVER
// ====================================
app.listen(port, ip, () => {
  // eslint-disable-next-line no-console
  console.log(`
${appSetting.name} ${appSetting.version}
IP: ${ip || 'localhost'}
Port: ${port}
Running with NodeJS ${process.version}`)
})

// Return for testing
module.exports = app
