const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setNameLocalizations({
            fr: 'ping',
        })
        .setDescription('Returns the ping of the bot.')
        .setDescriptionLocalizations({
            fr: 'Renvoie le ping du bot',
        })
        .setDMPermission(true)
        .setDefaultMemberPermissions(),
    ephemeral: true,
    async execute(client, interaction, options) {
        const locales = {
            fr: 'Pong ! ' + client.ws.ping + 'millisecondes',
        };
        interaction.editReply({
            content:
                locales[interaction.locale] ??
                'Pong! ' + client.ws.ping + 'milliseconds',
            ephemeral: true,
        });
    },
};
