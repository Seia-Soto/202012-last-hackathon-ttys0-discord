module.exports = async (app, message, args) => {
  message.channel.createMessage({
    embed: {
      title: '디버그',
      description: '봇을 디버깅하기 위한 명령.',
      fields: [
        {
          name: 'command',
          value: 'test'
        },
        {
          name: 'args',
          value: args.join('\n') || 'empty'
        }
      ]
    }
  })
}
