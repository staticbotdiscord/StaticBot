const { glob } = require('glob');
const { promisify } = require('util');
const { Client } = require('discord.js');
const db = require('quick.db');
const globPromise = promisify(glob);
console.log('[NODE/Handler] Packages Imported');

console.log(
    '\x1b[31m',
    '\n*********************************************\n*********************************************\n\nStatic Bot is Initiallising the handler\n\n*********************************************\n*********************************************\n\n\n\n',
);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(
        `${process.cwd()}/src/staticbot/commands/**/*.js`,
    );
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split('/');
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });
    console.log('[HANDLER] Commands Mapped');

    // Events
    const eventFiles = await globPromise(
        `${process.cwd()}/src/staticbot/events/*.js`,
    );
    eventFiles.map((value) => require(value));
    console.log('[HANDLER] Events Mapped');

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/src/staticbot/SlashCommands/*/*.js`,
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        console.log('[HANDLER] Slash Commands Mapped');
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (['MESSAGE', 'USER'].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on('ready', async () => {
        // Register for a single guild
        await client.guilds.cache
            .get('929057874020282378')
            .commands.set(arrayOfSlashCommands);

        // Register for all the guilds the bot is in
        // await client.application.commands.set(arrayOfSlashCommands);
    });
    console.log('[HANDLER] Slash Commands Registered');
};

console.log(
    '\x1b[31m',
    '\n*********************************************\n*********************************************\n\nStatic Bot has Initiallised the handler\n\n*********************************************\n*********************************************\n\n\n\n',
);
