/**
 * Mongoose schema for users
 * @module user.schema
 */
'use strict'

// npm modules
const mongoose = require('mongoose')

// Constants & Variables
const Schema = mongoose.Schema

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
},
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    autoIndex: false
  }) // EoS

/** User mongoose model */
module.exports = mongoose.model('User', UserSchema)