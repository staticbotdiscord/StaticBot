const client = require("../index");
const { InteractionHandler } = require('../../lib/index.js')
console.log('[NODE/interactionCreate.js] Packages Imported')
console.log('\x1b[31m',  '\n*********************************************\n*********************************************\n\nStatic Bot is now recieving Slash Commands\n\n*********************************************\n*********************************************\n\n\n\n')

client.on("interactionCreate", async (interaction) => {
    const interactionHandler = new InteractionHandler()
	interactionHandler.commands({ 
		interaction: interaction,
		client: client
	})
	interactionHandler.buttons({ 
		interaction: interaction,
		client: client
	})
	interactionHandler.selectMenus({ 
		interaction: interaction,
		client: client
	})
	interactionHandler.contextMenus({ 
		interaction: interaction,
		client: client
	})
});
