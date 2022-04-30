const { Message, Client } = require('discord.js');
const { SuccessEmbed, FailEmbed } = require('../../../lib');

module.exports = {
    name: 'clear',
    aliases: ['purge'],
    cooldown: 10,
    userperms: ['MANAGE_MESSAGES'],
    botperms: ['MANAGE_MESSAGES'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!args[0])
            return message.channel.send(
                'Please specify a number of messages to delete ranging from 1 - 99',
            );
        if (isNaN(args[0]))
            return message.channel.send('Numbers are only allowed');
        if (parseInt(args[0]) > 99)
            return message.channel.send(
                'The max amount of messages that I can delete is 99',
            );
        await message.channel
            .bulkDelete(parseInt(args[0]) + 1)
            .catch((err) => console.log(err));
        const embed = new SuccessEmbed({
            title: 'Messages Cleared',
            description: `Deleted ${args[0]} messages.`,
            system: `Purge System`,
        });
        message.channel.send({ embeds: [embed] });
    },
};
