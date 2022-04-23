const { Message, Client } = require("discord.js");

module.exports = {
    name: "slowmode",
    aliases: ['sm'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!isNaN(args[0]) || parseInt(args[0]) < 0) {
            let embed =  new MessageEmbed()
 .setColor(ee.color)
                .setDescription(`✅ Slowmode Enabled in ${message.channel} on Time ${args[0]}!`)
            message.reply(embed)
            message.channel.setRateLimitPerUser(args[0])
        } else {
            let embed2 =  new MessageEmbed()
 .setColor(ee.color)
                .setDescription(`Provided Argument is Not Number`)
            message.reply(embed2)
        }
    },
};
