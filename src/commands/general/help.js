bot.registerCommand('help', (msg) => {
  const sorted = {};
  Object.keys(bot.commands).forEach((label) => {
    if (sorted[bot.commands[label].description] === undefined) {
      sorted[bot.commands[label].description] = [];
    }
    sorted[bot.commands[label].description].push(`**${label}**: ${bot.commands[label].fullDescription}`);
  });
  const embed = {
    embed: {
      color: 0x7289DA,
      fields: [],
    },
  };
  Object.keys(sorted).forEach((key) => {
    embed.embed.fields.push({ name: key, value: sorted[key].join('\n') });
  });
  msg.channel.createMessage(embed);
}, { description: 'General', fullDescription: 'Get the commands this bot has.' });
