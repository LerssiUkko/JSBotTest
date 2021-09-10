const { MessageEmbed } = require("discord.js");

function EmbedMaker(message, title, description, color, fields = undefined, image_url = undefined) {
    em = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setColor(color)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter("paskabotti")


    if (fields) {
        em.addFields(fields)
    }

    if (image_url) {
        em.setImage(image_url)
    }

    console.log(message.author.displayAvatarURL())

    return em;
};

module.exports.EmbedMaker = EmbedMaker;
