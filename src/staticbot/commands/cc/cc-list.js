const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cc-list',
    aliases: ['cclist'],
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
        const length = message.guild.id.length;
        let data = db
            .all()
            .map((data) => data.ID)
            .filter((id) => id.startsWith(`cc_${message.guild.id}`))
            .join('\n')
            .slice(4 + length);
        console.log(data);
        if (!!data === false)
            return message.channel.send('There is no custom commands!');
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setDescription(`All Custom Commands:\n\n${data}`);
        message.channel.send({ embeds: [embed] });
    },
};
