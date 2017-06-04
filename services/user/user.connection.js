/**
 * Module used to create the database connection a export a instance used by the models
 * @module account.connection
 */

'use strict'

const mongooseConnect = require('../../libs/mongoose-connect')
const userConfig = require('./user.config')

module.exports = mongooseConnect(userConfig.mongoose)