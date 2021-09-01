const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('selectmenu')
		.setDescription('makes a select menu'),
	async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('ebinkkona')
					.setPlaceholder('Nothing selected')
					.setMinValues(2)
					.setMaxValues(3)
					.addOptions([
						{
							label: 'Joku paska',
							description: 'Tämä on paska',
							value: 'vittu',
						},
						{
							label: 'Joku vittu',
							description: 'Tämä on vittu',
							value: 'paska',
						},
						{
							label: 'Vittu eihän tää paska varmaan edes toimi',
							description: 'ääääääää',
							value: 'paska_ei_toimi_gg',
						},
					]),
			);

            await interaction.reply({ content: 'Bliugeli blau', components: [row] });

	},
};
