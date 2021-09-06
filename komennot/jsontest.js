const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let filter = m => m.author.id === message.author.id
    message.channel.send("lähetä jotain joka tulee json fileen").then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
          })
          .then(message => {
            message = message.first()
            message.channel.send(message)
          })
          .catch(collected => {
              message.channel.send('Timeout');
          });
    })
}
  module.exports.help = {
    name: "name",
    usage: "usage",
  };