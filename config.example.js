module.exports = {
  app: {
    token: '',
    prefix: '',
    client: {
      requestMethod: 'sequential',
      messageCacheMaxSize: 400,
      messageCacheLifetime: 0,
      messageSweepInterval: 30,
      fetchAllMembers: false,
      disableEveryone: true,
      restWsBridgeTimeout: 10000,
      restTimeOffset: 550,
      retryLimit: Infinity,
      disabledEvents: [
        'GUILD_SYNC',
        'USER_NOTE_UPDATE',
        'TYPING_START',
        'USER_SETTINGS_UPDATE'
      ]
    },
    fork: {
      automaticRespawn: true,
      arguments: [],
      quantity: 'auto',
      waitSpawning: true,
      spawningDelay: 5000,
      killingDelay: 500
    }
  },
  bind: {
    gid: '0', // NOTE: 서버 ID
    rid: '0', // NOTE: 관리자 역할 ID
    ridPub: '0' // NOTE: 참여자 역할 ID
  }
}
