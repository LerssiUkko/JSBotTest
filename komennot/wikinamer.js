const Discord = require("discord.js");
const axios = require('axios')
const cheerio = require('cheerio')



exports.run = (client, message, args) => {
    getheader(function(h1){
        console.log(h1)
    })
}
  module.exports.help = {
    name: "wikinamer",
    usage: "vaihtaa nimen random wikipedia artikkeliin",
  };

function getheader(callback) {
    axios
	.get('https://fi.wikipedia.org/wiki/Toiminnot:Satunnainen_sivu')
	.then((response) => {
        console.log(response)
	})
	.catch((error) => {
		console.error(error)
	});

}