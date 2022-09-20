const { ActivityType } = require('discord.js');
const { activityName, activityType, status } = require('../../config.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setPresence({
            activities: [{ name: activityName, type: activityType }],
            status: status,
        });
    },
};
