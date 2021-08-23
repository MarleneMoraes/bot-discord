const Discord = require('discord.js');

const bot = new Discord.Client();
  
const token = 'ODc5NDk5MTcxOTIzNjU2NzM0.YSQnbg.9N5k6QUNLeKXBj7nE4LWpbEFQwU'

bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'E ai galera!')
    msg.reply('Olá! Bem vindo ao nosso canal!')
})