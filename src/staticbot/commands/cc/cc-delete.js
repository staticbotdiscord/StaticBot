const db = require('quick.db');

module.exports = {
    name: 'cc-delete',
    aliases: ['ccdelete'],
    cooldown: 10,
    userperms: ['ADMINISTRATOR'],
    botperms: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const name = args[0];

        if (!name) return message.channel.send('Please specify a command name');

        const data = await db.fetch(`cc_${message.guild.id}_${name}`);
        if (!data)
            return message.channel.send('That custom command does not exist!');
        await db.delete(`cc_${message.guild.id}_${name}`);
        message.channel.send(`Removed **${name}** from custom commands!`);
    },
};
