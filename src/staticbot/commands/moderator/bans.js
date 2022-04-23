const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "bans",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
		if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('You do not have permission to perform this command.')
        const Banned = await message.guild.bans.fetch();
        const bannedmembers = (Banned).map(member => `${member.user.tag}`).join(`\n`)

        const embed = new MessageEmbed()
            .setColor("GREEN")
			.setTitle("All server bans")
			.setAuthor({ name: "Static Bot - Ban System" })
            .setDescription(`${bannedmembers}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter({ text: "Static Bot - Ban System" })
		message.channel.send({ embeds: [embed] })
    },
};
