/**
 * Pool of connections to application databases
 * @module database.pool
 */

// npm modules
const mongoose = require('mongoose')

// App modules
const appConfig = require('../config')

// Object with connections
const connections = {

}

// Export database.pool module
// ===========================
module.exports = {
  /** Create connections of available databases */
  connect,

  /** Object with connections to databases */
  connections
}

// HELPER FUNCTIONS
/**
 * Create connections of available databases
 */
function connect() {
  const mongoConnections = appConfig.mongo
  // Set mongoose promises
  mongoose.Promise = global.Promise

  // Make connections that are in application config
  for (let connectionName in mongoConnections) {
    const uri = mongoConnections[connectionName].uri
    const options = mongoConnections[connectionName].options

    // Create the connection
    const db = mongoose.createConnection(uri, options)

    // Asign a error handler for this connection
    db.on('error', err => {
      console.error('MongoDB connection error: ' + err)
      process.exit(-1)
    })

    // Save the connection in a pool
    connections[connectionName] = db
  }
}