/**
 * Mongoose schema for users
 * @module user.schema
 */
'use strict'

// npm modules
const mongoose = require('mongoose')

// App modules
const database = require('../../../database')

// Constants & Variables
const Schema = mongoose.Schema

// Get database connection from a pool
const db = database.dbPool.connections.default

// User schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin']
  },

  /** auto-generate fields */
  creationDate: {
    type: Date,
    default: Date.now
  }
}) // EoS

/**
 * User mongoose model
 */
module.exports = db.model('User', UserSchema)