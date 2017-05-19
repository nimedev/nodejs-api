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
ROUTES SERVICE`)

const server = require('../libs/server')
const routesConfig = require('./routes.config')
const routesController = require('./routes.controller')

// Start the service using a express server
const app = server(Object.assign(routesConfig.server, { service: routesController }))

module.exports = app
