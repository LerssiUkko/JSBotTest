var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const { SlashCommandBuilder } = require('@discordjs/builders');

const { EmbedMaker } = require("../EmbedMaker");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Laittaa random reddit paska memen'),
	async execute(interaction) {
		request("https://meme-api.herokuapp.com/gimme", function(meme_url){
            EmbedMaker(interaction, "meem", "meem", "RANDOM", undefined, meme_url,)

            interaction.reply({ embeds: [em] })
        })
	},
};

function request(url, callback) {
    return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
   
     xhr.addEventListener('load', function() {
      resolve(xhr);
      const obj = JSON.parse(xhr.responseText);
      return callback(obj.url)
     });
   
     xhr.addEventListener('error', reject);
     xhr.open('GET', url, true);
     xhr.send();
    });
   }