const client = require('../index');
const { InteractionHandler } = require('../../lib/index.js');
console.log('[NODE/interactionCreate.js] Packages Imported');
console.log(
    '\x1b[31m',
    '\n*********************************************\n*********************************************\n\nStatic Bot is now recieving Slash Commands\n\n*********************************************\n*********************************************\n\n\n\n',
);

client.on('interactionCreate', async (interaction) => {
    // Create Handler
    const interactionHandler = new InteractionHandler();
    // Commands
    interactionHandler.commands({
        interaction: interaction,
        client: client,
    });
    // Buttons
    interactionHandler.buttons({
        interaction: interaction,
        client: client,
    });
    // Select Menus
    interactionHandler.selectMenus({
        interaction: interaction,
        client: client,
    });
    // Context Menus
    interactionHandler.contextMenus({
        interaction: interaction,
        client: client,
    });
});
