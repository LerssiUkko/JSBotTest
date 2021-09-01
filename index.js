const fs = require('fs');

const { Client, Collection, Intents, Message } = require("discord.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const { token } = require("./config.json");
const meme = require('./commands/meme');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on("ready", () => {
    console.log("Bot is loaded")
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on("messageCreate", async message => {
	console.log(`${message.author.username}: ${message.content} in: ${message.guild}`)
})

client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === "ebinkkona") {
		interaction.member.send(`valitsit: ${interaction.values}`)
	}
});

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;

	if (interaction.customId === "memebutton") {
		request("https://meme-api.herokuapp.com/gimme", function(meme_url){
            interaction.channel.send(meme_url)
        })
	}
});

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

client.login(token)