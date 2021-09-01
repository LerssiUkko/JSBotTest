const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('makes a button for testing purposes'),
	async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('memebutton')
					.setLabel('Click for shit meme')
					.setStyle('PRIMARY'),
			);
            await interaction.reply({ content: 'Ebin jos toimii', components: [row] });

	},
};
