const db = require('quick.db');

module.exports = {
    name: 'cc-create',
    aliases: ['cccreate'],
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
        const response = args.slice(1).join(' ');

        if (!name) return message.channel.send('Please specify a command name');
        if (!response) return message.channel.send('Please specify a response');

        const data = await db.fetch(`cc_${message.guild.id}_${name}`);
        if (data)
            return message.channel.send('This custom commands exists already!');

        db.set(`cc_${message.guild.id}_${name}`, response);
        message.channel.send(`Saved **${name}** as a custom command!`);
    },
};
