module.exports = {
  "settings": {
    "command": '>'
  },
  run: async(client, message, args, db) => {
      const Discord = require('discord.js')
      const util = require('util');
      const moment = require('moment');
      const fs = require('fs');
      const fetch = require('node-fetch');
      const req = require('request');
      
    
      let owner = ["729304388408967172"] // teslim aldıktan sonra değiştiriniz.
      if (owner.includes(message.author.id)) {
          try {
              let toEval = args.join(" ");
              let evaluated = eval(toEval)
              if (!toEval) return;
              evaluated = util.inspect(evaluated)
              for (let i = 0; i < evaluated.length; i += 2000) {
                  let hrstart = process.hrtime()
                  let hrDiff;
                  hrDiff = process.hrtime(hrstart)
                  const toSend = evaluated.substring(i, Math.min(evaluated.length, i + 2000));
                  return message.channel.send(new Discord.MessageEmbed().setDescription(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.` + '```js\n' + toSend + '\n```'))
              }
          } catch (err) {
              let hrstart = process.hrtime()
              let hrDiff;
              hrDiff = process.hrtime(hrstart)
              message.channel.send(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms. \`Err!!\` \`\`\`xl\n${(err)}\n\`\`\``)
          }

      } else {
          return;
      }
  },
}