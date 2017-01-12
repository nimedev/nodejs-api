/**
 * @module database.config
 */

const mongoSuffix = process.env.NODE_ENV === 'test' ? '-test' : ''
const config = {
  // Define a Map by connection
  connections: new Map([
    ['default', {
      // Url according with environment variables
      uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
        process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME ||
        process.env.NODEJS_API_MONGODB_URI || `mongodb://localhost:27017/nodejs-api${mongoSuffix}`,

      // Setting for moongoose
      options: {
        db: {
          safe: true
        }
      }
    }]
  ])
}

// Test and log database settings
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log('\ndatabase.config:', JSON.stringify(config, null, ' '))
}

module.exports = Object.freeze(config)
