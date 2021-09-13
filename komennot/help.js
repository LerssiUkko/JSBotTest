const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
    fs.readdir("./komennot/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        var namelist = "";
        var desclist = "";
        var usage = "";

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            namelist = props.help.name;
            desclist = props.help.usage;

        message.channel.send(`**${namelist}** \n${desclist} \n${usage}`);
        });
})};

  module.exports.help = {
    name: "name",
    usage: "usage",
  };

