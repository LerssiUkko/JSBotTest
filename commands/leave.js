const { SlashCommandBuilder } = require('@discordjs/builders');

const { joinVoiceChannel, getVoiceConnection  } = require('@discordjs/voice');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('leaves your voice channel'),
	async execute(interaction) {

        if (!interaction.member.voice.channel) return;

        const connection = getVoiceConnection(interaction.member.voice.channel.guild.id);
        console.log(connection)

        connection.destroy();

        await interaction.reply(`lähetty vittuun kanavalta ${interaction.member.voice.channel.name}`)
	},
};
