// Class
class MessageHandler {
    constructor() {}

    /*
		Checks if message is a command
		If command runs command
		@param [options] Options for db, message, client
		@returns {Message} String that sends a message if it is a command
		@example
		// With all parameters(Required)
		messageHandler.commands({ message: message, db: db, client: client })
	*/
    async commands(options) {
        const { message, db } = options;
        try {
            let prefix = await db.fetch(`prefix_${message.guildId}`);
            if (prefix) {
                if (
                    !message.guild ||
                    !message.content.toLowerCase().startsWith(prefix)
                )
                    return;

                const [cmd, ...args] = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);

                if (await db.fetch(`cc_${message.guild.id}_${cmd}`)) {
                    const response = await db.fetch(
                        `cc_${message.guild.id}_${cmd}`,
                    );
                    message.channel.send(response);
                } else return;
            } else {
                let standardPrefix = '!';
                if (
                    !message.guild ||
                    !message.content.toLowerCase().startsWith(standardPrefix)
                )
                    return;

                const [cmd, ...args] = message.content
                    .slice(standardPrefix.length)
                    .trim()
                    .split(/ +/g);

                if (await db.fetch(`cc_${message.guild.id}_${cmd}`)) {
                    const response = await db.fetch(
                        `cc_${message.guild.id}_${cmd}`,
                    );
                    message.channel.send(response);
                } else return;
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = MessageHandler;
