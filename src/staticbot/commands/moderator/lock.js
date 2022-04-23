const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "lock",
    aliases: ['lockchannel'],
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
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Channel Locked")
            .setDescription(`🔒 ${message.channel} has been Locked`)
        await message.channel.send({ embeds: [embed] })
    },
};
