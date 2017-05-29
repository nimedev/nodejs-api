/**
 * Mongoose schema for users
 * @module user.schema
 */

'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
  },

  /** auto-generate fields */
  creationDate: {
    type: Date,
    default: Date.now,
  },
})

/**
 * User mongoose model
 */
module.exports = mongoose.model('User', UserSchema)