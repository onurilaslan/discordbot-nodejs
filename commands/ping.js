module.exports = {
  "settings": {
    "command": "ping"
  },
  run: (client, message, args) => {
message.channel.send(client.ws.ping)
  }
}