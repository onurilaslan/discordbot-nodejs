const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const fs = require('fs');
const stream = require('stream')
client.commands = new Discord.Collection();

fs.readdir('commands/', function(e ,f) {
  var js = f.filter(f => f.split(".").pop() === "js");
  var index = 0;
  js.length < 0 ? index++ : null;
  if(index > 0) return;
  js.forEach(f => {
    var props = require('./commands/'+f);
    props ? client.commands.set(props.settings.command, props) : null;
  });
})

client.on('message', message => {
  var prefix = '!';
  var messageArray = message.content.split(" ");
  var cmd = messageArray[0];
  var args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
  let commandFile = client.commands.get(cmd.slice(prefix.length));
  
  commandFile ? 
    commandFile.run(client, message, args)
  : null
});


/*const ms = require('ms')
const qdb = require('quick.db');
 let database = qdb.get(`sistemşeyi`);
setInterval(() => {
  if(qdb.get(`sistemşeyi`)) {
    client.guilds.cache.get("0").channels.cache.get("0").members.cache.forEach((x) => {
x.voice.kick()
})
  } else return;

}, ms(database))

*/




client.on("ready", () => {
 client.user.setActivity('with cervantes', { url: 'https://twitch.tv/cervanteshere', type: 'STREAMING' });
});

client.login(require('./config').token);
console.log(`Bot starting...`);
app.get('/', (req, res) => {res.send(stream, { highWaterMark: 512 })});
app.listen(3000);
