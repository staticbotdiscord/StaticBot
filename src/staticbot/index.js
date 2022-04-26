console.log('\x1b[31m',  '\n*********************************************\n*********************************************\n\nStatic Bot is Being Started\n\n*********************************************\n*********************************************\n\n\n\n')
const { StaticBot } = require('../lib')
const { Collection } = require('discord.js')
console.log('[NODE/index.js] Packages Imported')

const client = new StaticBot()

console.log('[CLIENT] Client has been made')

module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();

console.log('[COLLECTIONS] Collections have been made')

// Initializing the project
require("./handler")(client);

console.log('[index.js] Initiallised Handler')

client.login();
console.log('\x1b[31m',  '\n*********************************************\n*********************************************\n\nStatic Bot has been logged into\n\n*********************************************\n*********************************************\n\n\n\n')
