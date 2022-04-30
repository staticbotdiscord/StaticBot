const client = require('../index');
const { MessageEmbed } = require('discord.js');

client.on('guildCreate', async (guild) => {
    // Find channel to send message
    const channel = guild.channels.cache.find(
        (channel) =>
            channel.type === 'text' &&
            channel.permissionsFor(guild.me).has('SEND_MESSAGES'),
    );
    // If no channel don't send message
    if (!channel) return;
    // Send message
    channel.send('Thanks for inviting me');
});
