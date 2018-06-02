const Eris = require('eris');
const CONFIG = require('./config.json');

const bot = new Eris.CommandClient(
  CONFIG.token, {},
  {
    prefix: CONFIG.prefix,
    defaultHelpCommand: false,
  },
);

require('fast-glob').sync('./src/commands/**/*.js').forEach((file) => {
  require(file).attach(bot);
});

bot.connect();
