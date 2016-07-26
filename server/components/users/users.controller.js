/**
 * Group users routes in one express router
 * @module users.controller
 */
'use strict'

// npm modules
const express = require('express')

// App middleware
const dummy = require('../../middleware/dummy')

// Component modules
const User = require('./users.schema')

// Constants & Variables
const router = express.Router()

/**
 * @param {Object} sandbox - Reference to sandbox object.
 * @returns router for users routes.
 */
module.exports = sandbox => {
  let middleware

  console.log('Sandbox object: ', sandbox)

  /**
   * Send a list of users
   */
  middleware = [dummy.useDummy]
  router.get('/users', middleware, (req, res) => {
    User.find({}).exec()
      .then(users => res.json(users))
      .catch(err => res.status(404).json(err))
  })

  // Module router
  return router
}