/**
 * @module server.config
 */

'use strict'

const fs = require('fs')
const path = require('path')

const { normalizeUri } = require('./libs/database-tools')

const getDirectories = srcpath => (
  fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
)

// A list with the folder name of the services to load
const defaultServices = getDirectories(path.join(__dirname, 'services'))

const readServices = () => {
  const services = process.env.NODEJS_API_LOADER
  return services ? services.split(' ') : defaultServices
}

const config = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.NODEJS_API_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || undefined,
  services: readServices(),

  // Database configuration if use a unique db for all services.
  defaultMongoUri: normalizeUri(process.env.NODEJS_API_MONGODB_URI) || normalizeUri('mongodb://localhost:27017/nodejs_api'),
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nserver.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)