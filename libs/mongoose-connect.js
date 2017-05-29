/**
 * Use to create a connection with mongo usign mongoose.
 * @module mongoose-connect
 */

'use strict'

const mongoose = require('mongoose')

const errorLogger = require('./error-logger')

module.exports = ({ uri, options }) => {
  // Set mongoose promises
  mongoose.Promise = global.Promise

  // Create the connection
  mongoose
    .connect(uri, options)
    .catch((err) => {
      errorLogger(err)
      process.exit(-1)
    })
}