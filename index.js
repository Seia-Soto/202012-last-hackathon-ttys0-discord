const Eris = require('eris')
const { createLogger } = require('./utils')
const config = require('./config')

const debug = createLogger()

// NOTE: entry point;
module.exports = (async () => {
  debug('hello world from ttys0')

  const app = new Eris(config.app.token)
})()
