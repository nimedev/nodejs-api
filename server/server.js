/**
 * Main application file
 * @module server
 */

'use strict'

// eslint-disable-next-line no-console
console.log('====================================')

const express = require('express')

const serverConfig = require('../config')
const appSetting = require('../package')
const errorHandler = require('./error-handler')
const expressSetup = require('./express-setup')

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
const services = serverConfig.services.map((service) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  app.use('/api', require(`../services/${service}`))
  return service
}).join(', ')

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
sevices: ${services}
Running with NodeJS ${process.version}`)
})

// Return for testing
module.exports = app
