'use strict'

const userLambda = require('./user.lambda')
const userRoutes = require('./user.router')

module.exports = process.env.NODEJS_API_LAMBDA === 'true' ? userLambda : userRoutes
