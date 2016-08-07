/**
 * Group users routes in one express router
 * @module user.controller
 */
'use strict'

// npm modules
const express = require('express')

// App middleware
const dummy = require('../../middleware/dummy')

// Component modules
const User = require('./user.schema')

// Constants & Variables
const router = express.Router()

/**
 * @returns router for users routes.
 */
module.exports = () => {
  let middleware

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