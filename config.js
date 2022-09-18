const { ActivityType } = require('discord.js')

module.exports = {
	token: null, // Put null if using process.env["TOKEN"]
	guildId: '804742091208786031', // Leave blank is registering commands to all guilds
	clientId: '1020754404367937767', // The client ID from Discord Developer Portal
	thinkingMessage: '<:StaticBot:1020974440768610355> - Static Bot is thinking...', // What the bot will say while it is running the command but has not yet responded.
	thinkingMessageLocales: {
		fr: "<:StaticBot:1020974440768610355> - Static Bot pense...",
	},
	staff_emoji: { name: "StaticBot", id: "1020974440768610355", animated: false },
	staff: ["700641965787709520", "814819543348281374", "482214234193788980"],
	activityName: 'Sam sucks HEj and Hyper',
	activityType: ActivityType.Streaming,
	status: 'idle'
}