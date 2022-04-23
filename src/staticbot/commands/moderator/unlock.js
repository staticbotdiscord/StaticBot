const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "unlock",
    aliases: ['unlockchannel'],
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
                null: ['SEND_MESSAGES'],
            },
        ]);
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Channel Unlocked")
            .setDescription(`🔒 ${message.channel} has been Unlocked`)
        await message.channel.send({ embeds: [embed] })
    },
};
