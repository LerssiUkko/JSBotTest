const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send(`Argumentiksi laitoit ${args}`).catch(console.error);
}
  module.exports.help = {
    name: "argtest",
    usage: "testing out arguments command",
  };