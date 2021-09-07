const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send(args.toString().replace(/,/g, ' ')).catch(console.error)
    console.log(args)
    message.delete()
}
  module.exports.help = {
    name: "name",
    usage: "usage",
  };