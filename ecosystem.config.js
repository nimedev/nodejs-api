/**
 * PM2 process file to run services of YGH in staging environment.
 * @module ecosystem.config
 */

'use strict'

const path = require('path')

module.exports = {
  apps: [{
    name: 'nodejs-api',
    script: path.normalize(`${__dirname}/server/index.js`),
  }],
}