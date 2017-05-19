/**
 * Start a service for routes
 * @module routes
 */

'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// eslint-disable-next-line no-console
console.log(`
====================================
USER SERVICE`)

const mongooseConnect = require('../libs/mongoose-connect')
const server = require('../libs/server')
const userConfig = require('./user.config')
const userController = require('./user.controller')

// Connect with mongo usign mongoose
mongooseConnect(userConfig.mongoose)

// Start the service using a express server
const app = server(Object.assign(userConfig.server, { service: userController }))

module.exports = app
