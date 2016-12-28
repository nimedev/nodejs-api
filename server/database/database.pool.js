/**
 * Pool of connections to application databases
 * @module database.pool
 */

const mongoose = require('mongoose')
const dbConfig = require('./database.config')

/**
 * Object with connections to databases
 */
const connections = {}

/**
 * Create connections of available databases
 */
const connect = () => {
  const mongoConnections = dbConfig.connections
    // Set mongoose promises
  mongoose.Promise = global.Promise

  // Make connections that are in application config
  Object.keys(mongoConnections).map((connectionName) => {
    const uri = mongoConnections[connectionName].uri
    const options = mongoConnections[connectionName].options

    // Create the connection
    const db = mongoose.createConnection(uri, options)

    // Asign a error handler for this connection
    db.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`)
      process.exit(-1)
    })

    // Save the connection in a pool
    connections[connectionName] = db
    return db
  })
}

/**
 * database pool
 */
module.exports = Object.freeze({
  connect,
  connections
})
