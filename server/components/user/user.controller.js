/**
 * Group users routes in one express router
 * @module user.controller
 */

'use strict'

const express = require('express')
const responseError = require('../../helpers/response-error')
const dummy = require('../../middleware/dummy')
const userDAO = require('./user.dao')

const router = express.Router()

/**
 * @returns router for users routes.
 */
module.exports = () => {
  const dummyMiddleware = dummy.useDummy

  // Create component routes
  router
    .post('/users', dummyMiddleware, (req, res) => {
      // Try to create a user
      userDAO.creatingUser(req.body)
        .then(user => res.status(201).json({ user }))
        .catch(err => responseError(res, err))
    })
    .get('/users', dummyMiddleware, (req, res) => {
      userDAO
        .listingUsers()
        .then(users => res.json(users))
        .catch(err => responseError(res, err))
    })
    .get('/users/:userID', dummyMiddleware, (req, res) => {
      const userID = req.params.userID
      userDAO
        .findingUser({ _id: userID })
        .then(user => res.json(user))
        .catch(err => responseError(res, err))
    })

  // Module router
  return router
}