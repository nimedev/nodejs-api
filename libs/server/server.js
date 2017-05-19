/**
 * Main application file
 * @module server
 */

'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('express')

const appSetting = require('../../package')
const errorHandler = require('./error-handler')
const expressSetup = require('./express-setup')

module.exports = ({ port = 8080, ip, service = () => {} } = {}) => {
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
  const serviceName = service(app)

  // ERROR HANDLER ======================
  // ====================================
  errorHandler(app)

  // START THE SERVER
  // ====================================
  app.listen(port, ip, () => {
    // eslint-disable-next-line no-console
    console.log(`
NODEJS-API ${appSetting.version}
Service: ${serviceName}
IP: ${ip || 'localhost'}
Port: ${port}
Running with NodeJS ${process.version}`)
  })

  // Return for testing
  return app
}
