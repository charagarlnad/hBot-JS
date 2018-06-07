module.exports.attach = (bot) => {
  bot.registerCommand('invite', (msg) => {
    const embed = {
      embed: {
        url: `https://discordapp.com/oauth2/authorize?&client_id=${bot.user.id}&permissions=8&scope=bot`,
        title: 'To invite hBot to your server, click me.',
        color: 0x7289DA,
      },
    };
    msg.channel.createMessage(embed);
  }, { description: 'General', fullDescription: 'Get a invite to add the bot to your server.' });
};