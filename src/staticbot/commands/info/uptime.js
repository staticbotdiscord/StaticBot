const { Message, Client } = require("discord.js");
const uptime = require('../../events/ready.js')

module.exports = {
    name: "uptime",
    aliases: [],
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
        message.channel.send(`I have been online since <t:${Math.floor(uptime / 1000)}:R>`);
    },
};
