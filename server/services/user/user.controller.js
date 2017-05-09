/**
 * Group users routes in one express router
 * @module user.controller
 */

'use strict'

const express = require('express')
const dummy = require('../../middleware/dummy')
const userTools = require('./user.tools')

const router = express.Router()

/**
 * @returns router for users routes.
 */
module.exports = () => {
  const dummyMiddleware = dummy.useDummy

  // Create component routes
  router
    .post('/users', dummyMiddleware, (req, res, next) => {
      // Try to create a user
      userTools
        .creatingUser(req.body)
        .then(user => res.status(201).json({
          user
        }))
        .catch(next)
    })
    .get('/users', dummyMiddleware, (req, res, next) => {
      userTools
        .listingUsers()
        .then(users => res.json(users))
        .catch(next)
    })
    .get('/users/:userID', dummyMiddleware, (req, res, next) => {
      const userID = req.params.userID
      userTools
        .findingUser({
          _id: userID
        })
        .then(user => res.json(user))
        .catch(next)
    })

  // Module router
  return router
}
