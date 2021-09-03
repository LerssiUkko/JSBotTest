const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteractionOptionResolver, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Ottaa infon käyttäjästä jonka mentionaat')
		.addMentionableOption(option => option.setName('mentionable').setDescription('Mention something')),
	async execute(interaction) {
		const user = interaction.options.getMentionable('mentionable')
		JSON.stringify(user)
		console.log(user)
		const em = new MessageEmbed().setTitle('Infoa userista siittä').setDescription("Bliugeli blaugli");
		console.log(Object.values(user))
		em.addField("Käyttäjänimi:", `${user.username}#${user.discriminator}`, false)
		em.addField("UserID: ", `${user.id}`, false)
		em.addField("IsBOT? ", `${user.bot}`, false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		em.addField("mutsis ", " ä", false)
		interaction.reply({ embeds: [em] });
	},
};
