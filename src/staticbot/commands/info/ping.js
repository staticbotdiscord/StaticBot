const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
	cooldown: 10,
	userperms: [],
	botperms: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} ws ping`);
    },
};
