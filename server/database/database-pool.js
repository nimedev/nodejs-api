/**
 * Modole with the pool of connections to application databases and the required functions to
 * create the pool.
 * @module database-pool
 */

const mongoose = require('mongoose')
const dbConfig = require('./database.config')

/**
 * Object with connections to databases
 */
const connections = new Map()

/**
 * Create connections of available databases
 */
const connect = () => {
  // Set mongoose promises
  mongoose.Promise = global.Promise

  // Make connections that are in application config
  dbConfig.connections.forEach((config, name) => {
    // Create the connection
    const db = mongoose.createConnection(config.uri, config.options)

    // Asign a error handler for this connection
    db.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`)
      process.exit(-1)
    })

    // Save the connection in a pool
    connections.set(name, db)
  })
}

/**
 * database pool
 */
module.exports = Object.freeze({
  connect,
  connections
})
