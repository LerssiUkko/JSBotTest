const Discord = require("discord.js");
const { EmbedMaker } = require("../EmbedMaker");


exports.run = (client, message, args) => {
    EmbedMaker(message, "title", "testaan vaan toimiiko noi if statementit", "RANDOM")
    message.channel.send({ embeds: [em] })
}
  module.exports.help = {
    name: "name",
    usage: "usage",
  };