bot.registerCommand('sinfo', (msg) => {
  let voiceChannels = msg.channel.guild.channels.filter(channel => channel.type === 2)
  let textChannels = msg.channel.guild.channels.filter(channel => channel.type === 0)
  let owner = msg.channel.guild.members.get(msg.channel.guild.ownerID)
  let banlist = msg.channel.guild.getBans()
  let embed = {
    embed: {
      title: 'Server Info',
      fields: [
        {
          name: 'Server Name',
          value: msg.channel.guild.name,
          inline: true
        },
        {
          name: 'Server ID',
          value: msg.channel.guild.id,
          inline: true
        },
        {
          name: 'Server Region',
          value: msg.channel.guild.region,
          inline: true
        },
        {
          name: 'Server Owner',
          value: `${owner.username}#${owner.discriminator}`,
          inline: true
        },
        {
          name: 'Total Member Count',
          value: msg.channel.guild.members.size,
          inline: true
        },
        {
          name: 'Total Channel Count',
          value: voiceChannels.length + textChannels.length,
          inline: true
        },
        {
          name: 'Text Channels',
          value: textChannels.length,
          inline: true
        },
        {
          name: 'Voice Channels',
          value: voiceChannels.length,
          inline: true
        },
        {
          name: 'Roles',
          value: msg.channel.guild.roles.size,
          inline: true
        },
        {
          name: 'Created at',
          value: new Date(msg.channel.guild.createdAt).toLocaleString(),
          inline: true
        }
      ]
    }
  }
  banlist.then(function (banlist){
    embed.embed.fields.push(
      {
        name: 'Bans',
        value: banlist.length,
        inline: true
      }
    )
    msg.channel.createMessage(embed)
  }, function(error) {
    embed.embed.fields.push(
      {
        name: 'Bans',
        value: '?',
        inline: true
      }
    )
    msg.channel.createMessage(embed)
  })
}, {description: 'General', fullDescription: 'Get a invite to add the bot to your server.'})
