const { Message, Client, MessageEmbed } = require("discord.js");
const { SuccessEmbed, FailEmbed } = require('../../../lib');

module.exports = {
    name: "bans",
    aliases: [],
	cooldown: 10,
	userperms: ["BAN_MEMBERS"],
	botperms: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
		const Banned = await message.guild.bans.fetch();
        const bannedmembers = (Banned).map(member => `${member.user.tag}`).join(`\n`)

		const embed = new SuccessEmbed({
			title: "All server bans",
			description: `${bannedmembers}`,
			system: `Ban System`
		})
		message.channel.send({ embeds: [embed] })
    },
};
