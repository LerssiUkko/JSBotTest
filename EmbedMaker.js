const { MessageEmbed } = require("discord.js");

function EmbedMaker(interaction, title, description, color, fields = undefined, image_url = undefined) {
    em = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setColor(color)
    .setTimestamp()
    .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
    .setFooter("paskabotti")


    if (fields) {
        em.addFields(fields)
    }

    if (image_url) {
        em.setImage(image_url)
    }



    return em;
};

module.exports.EmbedMaker = EmbedMaker;
