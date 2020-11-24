const ms = require("ms");

module.exports = {
  "settings": {"command": "voicekick"},
  run: (client, message, args) => {
    const channel = message.guild.channels.cache.get("780499693221969932");
    if(!channel.type === "voice") { return; };
    const time = args[0];
    
   /* function Kick(member){
      return new Promise((resolve, reject) => {
        member.forEach((x) => {
          x.voice.kick();
          resolve();
        });
      });
    };*/
    
    setInterval(() => {
        channel.members.forEach((member) => {
          member.voice.kick();
        });
    }, ms(time)); 
     message.delete()

  }
};
