bot.registerCommand('help', (msg) => {
  const sorted = {};
  Object.keys(bot.commands).forEach((label) => {
    if (sorted[bot.commands[label].description] === undefined) {
      sorted[bot.commands[label].description] = [];
    }
    sorted[bot.commands[label].description].push(`**${label}**: ${bot.commands[label].fullDescription}`);
  });
  const finalFields = [];
  Object.keys(sorted).forEach((key) => {
    finalFields.push({ name: key, value: sorted[key].join('\n') });
  });
  const embed = {
    embed: {
      fields: finalFields,
    },
  };
  msg.channel.createMessage(embed);
}, { description: 'General', fullDescription: 'Get the commands this bot has.' });
