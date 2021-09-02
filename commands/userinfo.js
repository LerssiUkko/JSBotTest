const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteractionOptionResolver, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Ottaa infon käyttäjästä jonka mentionaat')
		.addMentionableOption(option => option.setName('mentionable').setDescription('Mention something')),
	async execute(interaction) {
		const user = interaction.options.getMentionable('mentionable')
		console.log(typeof user)
		const em = new MessageEmbed().setTitle('Infoa userista siittä').setDescription("Bliugeli blaugli");
		console.log(Object.values(user))
		em.addField("Käyttäjänimi", `${user.id}#${user.tag}`, false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		interaction.reply({ embeds: [em] });
	},
};
