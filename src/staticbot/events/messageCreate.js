const client = require("../index");
const db = require('quick.db')
const { MessageHandler, CooldownHandler } = require('../../lib/index.js')
console.log('[NODE/messageCreate.js] Packages Imported')

console.log('\x1b[31m',  '\n*********************************************\n*********************************************\n\nStatic Bot is now recieving Messages\n\n*********************************************\n*********************************************\n\n\n\n')

const cooldowns = new Map()
client.on("messageCreate", async (message) => {
	if(message.author.bot) return;
	const messageHandler = new MessageHandler()
	const cooldownHandler = new CooldownHandler()
	messageHandler.afk({ 
		message: message,
		db: db
	})
	messageHandler.commands({ 
		message: message, 
		db: db, 
		client: client,
		cooldowns: cooldowns,
		cooldownHandler: cooldownHandler
	})
});
