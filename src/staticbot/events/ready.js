const client = require('../index');

client.once('ready', () => {
    console.log(
        '\x1b[31m',
        `\n*********************************************\n*********************************************\n\n${client.user.tag} has been started\n\n*********************************************\n*********************************************\n\n\n\n`,
    );
    client.user.setPresence({
        activities: [{ name: 'Mention me!' }],
        status: 'dnd',
    });
    console.log('[EVENTS/READY] Activity Started');
});
var uptime = Date.now();

module.exports = uptime;
