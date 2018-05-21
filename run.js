const Eris = require('eris');
const CONFIG = require('./config.json');

global.bot = new Eris.CommandClient(CONFIG.token, {}, { prefix: CONFIG.prefix, defaultHelpCommand: false });

require('fast-glob').sync( './src/commands/**/*.js' ).forEach(function(file) {
    require(file);
});

bot.connect();
