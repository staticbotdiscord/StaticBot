const { Message, Client } = require("discord.js");
const { SuccessEmbed, FailEmbed } = require('../../../lib');

module.exports = {
    name: "lock",
    aliases: ['lockchannel'],
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
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('You do not have permission to perform this command.')
		message.channel.permissionOverwrites.set([
            {
                id: message.guild.id,
                deny: ['SEND_MESSAGES'],
            },
        ]);
        const embed = new SuccessEmbed({
			title: "Channel Locked",
			description: `🔒 ${message.channel} has been Locked`,
			system: `Channel System`
		})
        await message.channel.send({ embeds: [embed] })
    },
};
