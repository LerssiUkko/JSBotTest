const fs = require('fs');

const { Client, Collection, Intents, Message } = require("discord.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const { token, prefix } = require("./config.json");
const meme = require('./commands/meme');
const userinfo = require('./commands/userinfo');
const config = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on("ready", () => {
    console.log("Bot loaded")
});


//event handling and prefix command handling
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.komennot = new Collection();
 
fs.readdir("./komennot/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  if (!file.endsWith(".js")) return;
	  let props = require(`./komennot/${file}`);
	  let commandName = file.split(".")[0];
	  console.log(`Attempting to load command ${commandName}`);
	  client.komennot.set(commandName, props);
	});
  });
  

//slash command handling

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

//some random shit
client.on("messageCreate", async message => {
	console.log(`${message.author.username}: ${message.content} in: ${message.guild}`)
	fs.appendFile('./log.txt', `${message.author.username}: ${message.content} in: ${message.guild}\n`, err => {
		if (err) {
		  console.error(err)
		  return
		}
	  })
	  
})

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
