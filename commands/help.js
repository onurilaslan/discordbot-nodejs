module.exports = {
  "settings": {
    "command": "help"
  },
  run: (client, message, args) => {

    const Discord = require('discord.js')
    
    
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('Eros Bot Help Panel',true)
    .addField('!ban', 'It helps you ban the member to server.',true)
    .addField('!kick', 'It helps you kick the member to server.')
    .addField('!ping', 'bot ping.')
    .addField('!voicekick', 'It is a special thing. :) ')
    .addField('!mute', 'It will mute someone up.')
    message.channel.send(helpEmbed);
    
  }
}