/**
 * @module server.config
 */

'use strict'

// A list with the folder name of the services to load
const defaultServices = [
  'routes',
  'user'
]

const readServices = () => {
  const services = process.env.NODEJS_API_SERVICES
  return services ? services.split(' ') : defaultServices
}

const config = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.NODEJS_API_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || undefined,
  services: readServices()
}

// Test and log app settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\nserver.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)
