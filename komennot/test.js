const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}
  module.exports.help = {
    name: "test",
    usage: "just a test command",
  };