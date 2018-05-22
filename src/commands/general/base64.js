bot.registerCommand('base64', (msg, args) => {
  if (args[0] === 'encode') {
    args.shift()
    msg.channel.createMessage(Buffer.from(args.join(' ')).toString('base64'))
  } else if (args[0] === 'decode') {
    args.shift()
    msg.channel.createMessage(Buffer.from(args.join(' '), 'base64').toString('utf8'))
  } else {
    msg.channel.createMessage('A option of decode/encode is required.')
  }
}, {description: 'General', fullDescription: '[**Encode or Decode**] base64 representation of a [**string**].'})
