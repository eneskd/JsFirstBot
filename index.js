const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env['token']


client.on('ready', () => {console.log('The client is ready!')})

client.login(token)


