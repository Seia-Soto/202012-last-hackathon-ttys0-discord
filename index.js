const Eris = require('eris')
const commands = require('./commands')
const { createLogger } = require('./utils')
const config = require('./config')

const debug = createLogger()

// NOTE: entry point;
module.exports = (async () => {
  debug('hello world from ttys0')

  const app = new Eris(config.app.token)

  app.on('ready', () => debug('the bot has been logged into Discord gateway'))
  app.on('messageCreate', message => {
    // NOTE: polyfill;
    message.guild = message.channel.guild

    const devRules =
      (message.content) &&
      (message.content.startsWith(config.app.prefix))
    const prodRules =
      (message.guild.id === config.bind.gid) &&
      (message.member.roles.includes(config.bind.rid))
    if (!devRules) return
    if (!process.env.DEV && !prodRules) return

    const [command, ...args] = message.content
      .replace(config.app.prefix, '')
      .trim()
      .split(' ')
    const exec = commands[command]

    if (!exec) return

    exec(app, message, args)
  })

  // NOTE: login;
  app.connect()
})()
