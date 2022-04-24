const { Client } = require('discord.js');

class StaticBot extends Client {
	constructor() {
		super({
			intents: 32767
		})
	}
}

module.exports = StaticBot