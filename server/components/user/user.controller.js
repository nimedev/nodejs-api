/**
 * Group users routes in one express router
 * @module user.controller
 */
'use strict'

// npm modules
const express = require('express')

// App modules
const responseError = require('../../helpers/response-error')

// App middleware
const dummy = require('../../middleware/dummy')

// Component modules
const userDAO = require('./user.dao')
const userError = require('./user-error.map')

// Constants & Variables
const router = express.Router()

/**
 * @returns router for users routes.
 */
module.exports = () => {
  let middleware

  // POST
  /**
   * Create a user
   */
  middleware = [dummy.useDummy]
  router.post('/users', middleware, (req, res) => {
    // Validate email
    if (!req.body.email) {
      return responseError(res, userError.get('InvalidEmail'))
    }

    // Validate role
    if (!req.body.role) {
      return responseError(res, userError.get('InvalidRole'))
    }

    // Try to create a user
    userDAO.creatingUser(req.body)
      .then(user => res.status(201).json({ user }))
      .catch(err => responseError(res, err))
  })


  // GET
  /**
   * Send a list of users
   */
  middleware = [dummy.useDummy]
  router.get('/users', middleware, (req, res) => {
    userDAO
      .listingUsers()
      .then(users => res.json(users))
      .catch(err => responseError(res, err))
  })

  /**
   * Send a user by id
   */
  middleware = [dummy.useDummy]
  router.get('/users/:userID', middleware, (req, res) => {
    const userID = req.params.userID
    userDAO
      .findingUser({ _id: userID })
      .then(user => res.json(user))
      .catch(err => responseError(res, err))
  })

  // Module router
  return router
}