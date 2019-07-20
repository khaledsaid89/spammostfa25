const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602084897787478018")
setInterval(function() {
channel.send(`mostfa xd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);