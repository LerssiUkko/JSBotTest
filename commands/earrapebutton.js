const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageComponentInteraction } = require('discord.js');

const earrapeplayer = require("./playearrape")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('earrapebutton')
		.setDescription('rip korvat'),
	async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('earrapeindian')
					.setLabel('Click for earrape')
					.setStyle('PRIMARY'),
			);

        await interaction.reply({ content: 'Ö', components: [row] });

        const filter = i => i.customId === 'earrapeindian';

        const collector = interaction.channel.createMessageComponentCollector({ filter });

        collector.on('collect', async i => {
            if (i.customId === 'earrapeindian') {
                await earrapeplayer.execute(interaction)
            }
        });
	},
};
