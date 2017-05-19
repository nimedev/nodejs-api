/**
 * Set routes
 * @module routes.controller
 */

'use strict'

const express = require('express')

const router = express.Router()

// Create service routes
router
  .get('/', (req, res) => res.send('Welcome to nimedev`s nodejs API seed'))

// Return the service router
module.exports = router
