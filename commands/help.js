const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows all commands'),
	async execute(interaction) {
		interaction.reply("juu")
	},
};
