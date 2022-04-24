const { Message, Client } = require("discord.js");
const { SuccessEmbed, FailEmbed } = require('../../../lib');

module.exports = {
    name: "slowmode",
    aliases: ['sm'],
	cooldown: 10,
	userperms: ["MANAGE_CHANNELS"],
	botperms: ["MANAGE_CHANNELS"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!isNaN(args[0]) || parseInt(args[0]) < 0) {
			const embed = new SuccessEmbed({
				title: "Slowmode Enabled",
				description: `✅ Slowmode Enabled in ${message.channel} with a time ${args[0]} seconds!`,
				system: `Slowmode System`
			})
            message.reply({ embeds: [embed] })
            message.channel.setRateLimitPerUser(args[0])
        } else {
			const embed = new FailEmbed({
				title: "Usage",
				description: `slowmode <integer(time in seconds)>`,
				system: `Slowmode System`
			})
            message.reply({ embeds: [embed] })
        }
    },
};
