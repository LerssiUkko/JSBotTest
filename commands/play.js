const { SlashCommandBuilder, CommandInteractionOptionResolver } = require('@discordjs/builders');

const { joinVoiceChannel } = require('@discordjs/voice');

const { queue } = require("../index")

const fs = require('fs');
const ytdl = require('ytdl-core');

const { yt_api_key } = require("../config.json")

const search = require("youtube-search")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('tries to play a song, not working propably:DDD')
        .addStringOption(option =>
            option.setName('songname')
                .setDescription('The input to echo back')
                .setRequired(true)),

	async execute(interaction) {
        const songname = interaction.options.getString('songname');
        ribuli = await get_song_info(songname)
        console.log(ribuli)
        
	},
};

async function get_song_info(songname) {
    var opts = {
        maxResults: 1,
        key: yt_api_key,
      };
      
      search(songname, opts, function(err, results) {
        if(err) return console.log(err);
        return results;
      });
}