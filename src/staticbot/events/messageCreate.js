const client = require('../index');
const db = require('quick.db');
const { MessageHandler, CooldownHandler } = require('../../lib/index.js');
console.log('[NODE/messageCreate.js] Packages Imported');

console.log(
    '\x1b[31m',
    '\n*********************************************\n*********************************************\n\nStatic Bot is now recieving Messages\n\n*********************************************\n*********************************************\n\n\n\n',
);

// Create cooldowns
const cooldowns = new Map();
client.on('messageCreate', async (message) => {
    // If bot
    if (message.author.bot) return;
    // Create handelrs
    const messageHandler = new MessageHandler();
    const cooldownHandler = new CooldownHandler();
    // If member is afk remove AFK || If mentioned AFK member
    messageHandler.afk({
        message: message,
        db: db,
    });
    // If message = command run command
    messageHandler.commands({
        message: message,
        db: db,
        client: client,
        cooldowns: cooldowns,
        cooldownHandler: cooldownHandler,
    });
});
