bot.registerCommand('help', (msg) => {
    var finaltext = '';
    finaltext += '**hBot Commands:\n**';
    for(label in bot.commands) {
        finaltext += `  **${msg.prefix}${label}** - ${bot.commands[label].description}\n`;
    }
    msg.channel.createMessage(finaltext);
}, { description: 'Get the commands this bot has.'});
