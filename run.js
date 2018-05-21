const Eris = require('eris');
const CONFIG = require('./config.json');

var bot = new Eris.CommandClient(CONFIG.token, {}, {
    description: 'A epic bot that is slightly less shit now.',
    owner: 'Chara#0001',
    prefix: CONFIG.prefix
});

console.log('fuck');

bot.registerCommand('h', (msg) => {
    console.log('fuckass');
    msg.channel.createMessage('h');
}, {
    description: 'h',
    fullDescription: 'hhhhhhhhh',
    usage: 'no'
});

bot.connect();
