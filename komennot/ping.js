const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send(`Botin hitaus: ${Date.now() - message.createdTimestamp}ms. Discord API:n hitaus: ${Math.round(client.ws.ping)}ms`).catch(console.error);
}
  module.exports.help = {
    name: "name",
    usage: "usage",
  };