const { MessageEmbed } = require("discord.js");

function EmbedMaker(message, title, description, color, fields = undefined, image_url = undefined) {
    em = new MessageEmbed().setTitle(title).setDescription(description).setColor(color).setAuthor(message.author.username);
    if (fields) {
        em.addFields(fields)
    }

    if (image_url) {
        em.setImage(image_url)
    }
    return em;
};

module.exports.EmbedMaker = EmbedMaker;
