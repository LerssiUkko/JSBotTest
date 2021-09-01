const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fakyou')
		.setDescription('haistattaa paskat'),
	async execute(interaction) {
		await interaction.reply('haista pasak');
	},
};
