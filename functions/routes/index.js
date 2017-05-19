'use strict'

const routesLambda = require('./routes.lambda')
const routesRoutes = require('./routes.router')

module.exports = process.env.NODEJS_API_LAMBDA === 'true' ? routesLambda : routesRoutes
