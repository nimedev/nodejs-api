/**
 * Group users routes in one express router
 * @module user.router
 */

'use strict'


const express = require('express')

const mongooseConnect = require('../../libs/mongoose-connect')
const userConfig = require('./user.config')
const dummy = require('./user.middleware/dummy')
const userTools = require('./user.tools')

const router = express.Router()
const dummyMiddleware = dummy.useDummy

// Connect with mongo usign mongoose
mongooseConnect(userConfig.mongoose)

// Create service routes
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

// Return the service router
module.exports = router
