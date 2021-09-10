const Discord = require("discord.js");
const { EmbedMaker } = require("../EmbedMaker");

exports.run = (client, message, args) => {
    bliugeli = ({name : "kkonaaa", value:"kkonaa of values ä", inline:true},
                {name:"kkonaa osa 2", value:"kkonaa of values part 2 ö", inline:false})
    EmbedMaker(message, "Tämä on title", "Tämä on description", "RANDOM", fields=bliugeli, image_url="https://pbs.twimg.com/profile_images/699793545910091776/U4hA2LXJ_400x400.jpg", footer={text:"bligeliblo", url:"https://i.pinimg.com/originals/4c/40/b1/4c40b187c873f3ba15c52045b86e6500.png"})
    message.channel.send({ embeds: [em] })
}
  module.exports.help = {
    name: "name",
    usage: "usage",
  };