const { Message, Client, MessageEmbed } = require('discord.js');
const { SuccessEmbed, FailEmbed } = require('../../../lib');

module.exports = {
    name: 'ban',
    aliases: [],
    cooldown: 10,
    userperms: ['BAN_MEMBERS'],
    botperms: ['BAN_MEMBERS'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);

        // If no member
        if (!member) {
            const embed = new FailEmbed({
                title: 'Command Usage',
                description: `The usage for this command is \`ban <@user> <reason>\`\nYou did not mention or give the id of a member\nNote: You can not moderate people with a higher role then you.`,
                system: `Ban System`,
            });
            return message.channel.send({ embeds: [embed] });
        }

        // If member role is not higher
        if (
            member.roles.highest.comparePositionTo(
                message.guild.me.roles.highest,
            ) >= 0
        ) {
            const embed = new FailEmbed({
                title: 'Command Usage',
                description: `The usage for this command is \`ban <@user> <reason>\`\nYour role is not higher then the member you gave\nNote: You can not moderate people with a higher role then you.`,
                system: `Ban System`,
            });
            return message.channel.send({ embeds: [embed] });
        }

        let reason = args.slice(1).join(' ');

        // if no reason
        if (!reason) {
            const embed = new FailEmbed({
                title: 'Command Usage',
                description: `The usage for this command is \`ban <@user> <reason>\`\nYou did not give a reason\nNote: You can not moderate people with a higher role then you.`,
                system: `Ban System`,
            });
            return message.channel.send({ embeds: [embed] });
        }
        // Ban member
        if (member) {
            await member.ban();
            const embed = new SuccessEmbed({
                title: 'Member Banned',
                description: `<@${member.user.id}> Banned From Guild \n\nThe reason by the Moderator is \`\`${reason}\`\`\n\nThis user was banned by ${message.author.username}`,
                system: `Ban System`,
            });
            return message.channel.send({ embeds: [embed] });
        }
    },
};
