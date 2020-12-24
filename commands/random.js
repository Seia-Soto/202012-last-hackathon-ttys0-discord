const { bind } = require('../config')

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min // 최댓값도 포함, 최솟값도 포함
}

module.exports = async (app, message, args) => {
  const engaged = message.guild.members.filter(member => member.roles.includes(bind.ridPub))
  const number = getRandomIntInclusive(0, engaged.length - 1)

  if (!engaged.length) {
    return message.channel.createMessage('현재 채널에서 지정된 역할을 가진 사람을 찾을 수 없습니다.')
  }

  message.channel.createMessage(`채널에서 이벤트 역할을 가진 ${engaged.length}명 중 ${engaged[number].mention}님이 당첨되셨습니다.`)
}
