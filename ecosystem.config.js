/**
 * PM2 process file to run services of YGH in staging environment.
 * @module ecosystem.config
 */

'use strict'

const path = require('path')

module.exports = {
  apps: [{
    name: 'nodejs-api:routes',
    script: path.normalize(`${__dirname}/routes/index.js`)
  }, {
    name: 'nodejs-api:user',
    script: path.normalize(`${__dirname}/user/index.js`)
  }]
}
