module.exports.attach = (bot) => {
  bot.registerCommand('sinfo', (msg) => {
    const voiceChannels = msg.channel.guild.channels.filter(channel => channel.type === 2);
    const textChannels = msg.channel.guild.channels.filter(channel => channel.type === 0);
    const owner = msg.channel.guild.members.get(msg.channel.guild.ownerID);
    const bans = msg.channel.guild.getBans();
    const embed = {
      embed: {
        title: 'Server Info',
        color: 0x7289DA,
        thumbnail: {
          url: msg.channel.guild.iconURL
        },
        fields: [
          {
            name: 'Server Name',
            value: msg.channel.guild.name,
            inline: true,
          },
          {
            name: 'Server ID',
            value: msg.channel.guild.id,
            inline: true,
          },
          {
            name: 'Server Region',
            value: msg.channel.guild.region,
            inline: true,
          },
          {
            name: 'Server Owner',
            value: `${owner.username}#${owner.discriminator}`,
            inline: true,
          },
          {
            name: 'Total Member Count',
            value: msg.channel.guild.members.size,
            inline: true,
          },
          {
            name: 'Total Channel Count',
            value: voiceChannels.length + textChannels.length,
            inline: true,
          },
          {
            name: 'Text Channels',
            value: textChannels.length,
            inline: true,
          },
          {
            name: 'Voice Channels',
            value: voiceChannels.length,
            inline: true,
          },
          {
            name: 'Roles',
            value: msg.channel.guild.roles.size,
            inline: true,
          },
          {
            name: 'Created at',
            value: new Date(msg.channel.guild.createdAt).toLocaleString(),
            inline: true,
          },
        ],
      },
    };
    bans.then((banlist) => {
      embed.embed.fields.push({
        name: 'Bans',
        value: banlist.length,
        inline: true,
      });
      msg.channel.createMessage(embed);
    }, () => {
      embed.embed.fields.push({
        name: 'Bans',
        value: '?',
        inline: true,
      });
      msg.channel.createMessage(embed);
    });
  }, { description: 'General', fullDescription: 'Get a invite to add the bot to your server.' });  
};