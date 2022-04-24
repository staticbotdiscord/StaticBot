const { MessageEmbed } = require('discord.js');

class SuccessEmbed extends MessageEmbed {
	constructor(options) {
		super()
			.setColor("GREEN")
			.setAuthor({ name: `Static Bot - ${options.system}` })
			.setTitle(options.title)
			.setDescription(options.description)
			.setFooter({ text: `Static Bot - ${options.system}` })
		const { title, description, system } = options
	}
}

module.exports = SuccessEmbed