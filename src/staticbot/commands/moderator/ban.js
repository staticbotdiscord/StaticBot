const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
		if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('You do not have permission to perform this command.')
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // If no member
        if (!member) {
            const embedNM = new MessageEmbed()
                .setColor("RED")
                .setTitle(`**Please Mention a User to Ban**`)
                .setDescription(`The usage for this command is \`ban <@user> <reason>\``)
                .setFooter({ text: "Static Bot - Ban System" })
			return message.channel.send({ embeds: [ embedNM ] })
        }

        // If member role is not higher
        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
            const embedRTL = new MessageEmbed()
                .setColor("RED")
                .setDescription(`** Your Role is Not High Enough To Ban this User **`)
                .setFooter({ text: "Static Bot - Ban System" })
			return message.channel.send({ embeds: [ embedRTL ] })
        }

        let reason = args.slice(1).join(" ")

        // if no reason
        if (!reason) {
            const embedNR = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**Please Give Reason **`)
                .setFooter({ text: "Static Bot - Ban System" })
			return message.channel.send({ embeds: [ embedNR ] })
        }
        // Ban member
        if (member) {
            await member.ban()
            const embedSuccess = new MessageEmbed()
                .setColor("GREEN")
				.setAuthor({ name: "Static Bot - Ban System" })
                .setDescription(`<@${member.user.id}> Banned From Guild \n\nThe reason by the Moderator is \`\`${reason}\`\`\n\nThis user was banned by ${message.author.username}`)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter({ text: "Static Bot - Ban System" })
			return message.channel.send({ embeds: [ embedSuccess ] })
        }
    },
};
