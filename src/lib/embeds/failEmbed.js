const { MessageEmbed } = require('discord.js');

class FailEmbed extends MessageEmbed {
    constructor(options) {
        super()
            .setColor('RED')
            .setAuthor({ name: `Static Bot - ${options.system}` })
            .setTitle(options.title)
            .setDescription(options.description)
            .setFooter({ text: `Static Bot - ${options.system}` });
        const { title, description, system } = options;
    }
}

module.exports = FailEmbed;
