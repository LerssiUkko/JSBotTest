const { SlashCommandBuilder } = require('@discordjs/builders');

const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('playearrape')
		.setDescription('plays loud indian music in your voice channel'),
	async execute(interaction) {

        if (!interaction.member.voice.channel) return;


        console.log("making connection")
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        
        
        await interaction.channel.send(`joinattu kanavalle ${interaction.member.voice.channel.name}`)

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        const resource = createAudioResource('indian.mp3', {
            metadata: {
                title: 'intialainen rinkitinkitinki korvaraiskuas',
            },
        });
        player.play(resource);
        connection.subscribe(player);
        interaction.reply(`soitetaan ${resource.metadata.title}`)

	},
};
