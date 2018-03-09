const { Command } = require('discord.js-commando')
const fs = require('fs')

module.exports = class YouSuckCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'nou',
      group: 'misc',
      memberName: 'nou',
      description: 'Give the bot creators some feedback',
      examples: ['nou'],
      aliases: ['no-u']
    })
  }
  run (message) {
    message.reply('', { file: fs.readFileSync('img/no-no-u.png') })
  }
}
