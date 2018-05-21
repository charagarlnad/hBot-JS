const Eris = require('eris');
const CONFIG = require('./config.json');

global.bot = new Eris.CommandClient(CONFIG.token, {}, { prefix: CONFIG.prefix, defaultHelpCommand: false });

var glob = require('glob');
var path = require('path');
glob.sync( './src/commands/**/*.js' ).forEach(function(file) {
    require(path.resolve(file));
    // easier loader using exports if i want to do that later i guess idfk
    // bot.registerCommand(mod.name, mod.command, { description: mod.description });
});

bot.connect();
