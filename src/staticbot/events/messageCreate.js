const client = require("../index");
const db = require('quick.db')
const { Main } = require('./message/index.js')
console.log('[NODE/messageCreate.js] Packages Imported')

console.log('\x1b[31m',  '\n*********************************************\n*********************************************\n\nStatic Bot is now recieving Messages\n\n*********************************************\n*********************************************\n\n\n\n')

client.on("messageCreate", async (message) => {
	if(message.author.bot) return;
	const main = new Main(message, db)
	main.afk(message, db)
	main.commands(message, db, client)
});
