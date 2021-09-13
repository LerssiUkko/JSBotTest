const { SlashCommandBuilder } = require('@discordjs/builders');

const { joinVoiceChannel } = require('@discordjs/voice');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('joins your voice channel'),
	async execute(interaction) {

        if (!interaction.member.voice.channel) return;

        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        
        await interaction.reply(`joinattu kanavalle ${interaction.member.voice.channel.name}`)
	},
};
