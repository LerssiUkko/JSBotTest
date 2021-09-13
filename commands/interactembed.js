const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedMaker } = require("../EmbedMaker");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('interactembedh')
		.setDescription('just testing embedhandler with slash commands'),
	async execute(interaction) {
        console.log(interaction)
        bliugeli = ({name : "kkonaaa", value:"kkonaa of values ä", inline:true},
        {name:"kkonaa osa 2", value:"kkonaa of values part 2 ö", inline:false})
        EmbedMaker(interaction, "Tämä on title", "Tämä on description", "RANDOM", fields=bliugeli, image_url="https://pbs.twimg.com/profile_images/699793545910091776/U4hA2LXJ_400x400.jpg")
        interaction.reply({ embeds: [em] })
	},
};
