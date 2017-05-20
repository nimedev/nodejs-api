/**
 * Set routes
 * @module routes.controller
 */

'use strict'

const path = require('path')

const express = require('express')

const router = express.Router()

// Create service routes
router
  // Wellcome page
  .get('/', (req, res) => res.send('Welcome to nimedev`s nodejs API seed'))

  // Documentation
  .get('/documentation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/docs/docs.html'))
  })

// Return the service router
module.exports = router
