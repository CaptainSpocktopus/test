const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.login(config.token);

client.on('ready',() => {
    console.log('online!'); // confirms the bot is online
})

client.on('message', message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toUpperCase();
  
    if(!message.content.startsWith(config.prefix) || message.author.bot) return; // checks if message starts with prefix and if author is a bot
    if(command === 'PING') {
        message.channel.send('Pong');
    }
    if (command === "ASL") {
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}.`);
    }
});
