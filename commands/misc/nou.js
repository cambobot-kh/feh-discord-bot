const { Command } = require('discord.js-commando')
const path = require('path')
const fs = require('fs')

module.exports = class YouSuckCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'nou',
      group: 'misc',
      memberName: 'nou',
      description: 'No u',
      examples: ['nou'],
      aliases: ['no-u']
    })
  }
  run (message) {
    message.reply('', { files: [fs.readFileSync(path.join('img', 'no-no-u.png'))] })
  }
}
