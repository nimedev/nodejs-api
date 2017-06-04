/**
 * Use to create a connection with mongo usign mongoose.
 * @module mongoose-connect
 */

'use strict'

const mongoose = require('mongoose')

const errorLogger = require('./error-logger')

/**
 * @returns a database connection
 */
module.exports = ({ uri, options }) => {
  // Set mongoose promises
  mongoose.Promise = global.Promise

  // Create the connection
  const db = mongoose.createConnection(uri, options)

  // Asign a error handler for this connection
  db.on('error', (err) => {
    errorLogger(err)
    process.exit(-1)
  })

  return db
}