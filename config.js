const { ActivityType } = require('discord.js');

// Config is documented in README.md
module.exports = {
    token: null,
    guildId: '804742091208786031',
    clientId: '1020754404367937767',
    thinkingMessage:
        '<:StaticBot:1020974440768610355> - Static Bot is thinking...',
    thinkingMessageLocales: {
        fr: '<:StaticBot:1020974440768610355> - Static Bot pense...',
    },
    staffEmoji: {
        name: 'StaticBot',
        id: '1020974440768610355',
        animated: false,
    },
    staff: ['700641965787709520', '814819543348281374', '482214234193788980'],
    activityName: 'Testing.',
    activityType: ActivityType.Streaming,
    status: 'idle',
};
