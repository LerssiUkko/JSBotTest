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
					.setMinValues(1)
					.setMaxValues(5)
					.addOptions([
						{
							label: 'Joku paska',
							description: 'Tämä on paska',
							value: 'paska',
						},
						{
							label: 'Joku vittu',
							description: 'Tämä on vittu',
							value: 'vittu',
						},
						{
							label: 'kkonaaa',
							description: 'kkonas',
							value: 'kkona',
						},
                        {
							label: 'Vittu eihän tää paska varmaan edes toimi',
							description: 'ääääääää',
							value: 'paska_ei_toimi_gg',
						},
                        {
							label: 'mutsis',
							description: 'vittu',
							value: 'mutsis',
						},
                        {
							label: 'kkong adn the kkona',
							description: 'ö',
							value: 'kkong',
						},
					]),
			);
            await interaction.reply({ content: 'Bliugeli blau', components: [row] });
			if (interaction.customId === "ebinkkona") {
				interaction.member.send(`valitsit: ${interaction.values}`)
			}

	},
};
