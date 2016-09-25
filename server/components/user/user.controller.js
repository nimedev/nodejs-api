/**
 * Group users routes in one express router
 * @module user.controller
 */
'use strict'

// npm modules
const express = require('express')

// App modules
const database = require('../../database')
const responseError = require('../../response-error')

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

  // POST
  /**
   * Create a user
   */
  middleware = [dummy.useDummy]
  router.post('/users', middleware, (req, res) => {
    // Validate email
    if (!req.body.email) {
      return responseError.send(res, 'InvalidEmail')
    }

    // Validate role
    if (!req.body.role) {
      return responseError.send(res, 'InvalidRole')
    }

    // Checks if the user not exists
    database.dbService
      .findingOne(User, { email: req.body.email })
      .then(user => {
        // Cancel the creation because there is a user with the same email
        if (user) return responseError.send(res, 'EmailAlreadyExits')

        // Create a new user
        const newUser = new User({
          email: req.body.email,
          role: req.body.role
        })

        // Save new user and send token
        newUser.save()
          .then(user => {
            res.status(201).json({ user })
          })
          .catch(err => responseError.send(res, err))
      })
  })


  // GET
  /**
   * Send a list of users
   */
  middleware = [dummy.useDummy]
  router.get('/users', middleware, (req, res) => {
    database.dbService
      .finding(User, {})
      .then(users => res.json(users))
      .catch(err => res.status(404).json(err))
  })

  /**
   * Send a user by id
   */
  middleware = [dummy.useDummy]
  router.get('/users/:userID', middleware, (req, res) => {
    const userID = req.params.userID
    database.dbService
      .findingOne(User, { _id: userID })
      .then(user => {
        if(!user) return responseError.send(res, 'UserNotFound')

        // Send user info
        res.json(user)
      })
      .catch(err => res.status(404).json(err))
  })

  // Module router
  return router
}