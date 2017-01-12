/**
 * Mongoose schema for users
 * @module user.schema
 */

const mongoose = require('mongoose')
const database = require('../../../database')

const Schema = mongoose.Schema

// Get database connection from a pool
const db = database.connections.get('default')

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
})

/**
 * User mongoose model
 */
module.exports = db.model('User', UserSchema)
