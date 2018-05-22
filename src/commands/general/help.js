bot.registerCommand('help', (msg) => {
  var sorted = {}
  for (label in bot.commands) {
    if (sorted[bot.commands[label].description] === undefined) {
      sorted[bot.commands[label].description] = []
    }
    sorted[bot.commands[label].description].push(`**${label}**: ${bot.commands[label].fullDescription}`)
  }
  var finalFields = []
  Object.keys(sorted).forEach(function (key) {
    finalFields.push({'name': key, 'value': sorted[key].join('\n')})
  })
  var embed = {
    'embed': {
      'fields': finalFields
    }
  }
  msg.channel.createMessage(embed)
}, {description: 'General', fullDescription: 'Get the commands this bot has.'})
