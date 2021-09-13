const { SlashCommandBuilder } = require('@discordjs/builders');

const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, AudioPlayerStatus, entersState  } = require('@discordjs/voice');


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

        const player = createAudioPlayer();

        const resource = createAudioResource('./indian.mp3', {
            metadata: {
                title: 'intialainen rinkitinkitinki korvaraiskuas',
            },
        });

        async function start() {
        player.play(resource);
        connection.subscribe(player);
        try {
            await entersState(player, AudioPlayerStatus.Playing, 5_000);
            // The player has entered the Playing state within 5 seconds
            console.log('Playback has started!');
        } catch (error) {
            // The player has not entered the Playing state and either:
            // 1) The 'error' event has been emitted and should be handled
            // 2) 5 seconds have passed
            console.error(error);
        }
    }

        void start();

        await interaction.reply(`soitetaan ${resource.metadata.title}`)

	},
};
