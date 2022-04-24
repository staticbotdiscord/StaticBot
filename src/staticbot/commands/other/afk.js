const db = require('quick.db')

module.exports = {
    name : 'afk',
	cooldown: 5,
	userperms: [],
	botperms: [],
	 /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run : async(client, message, args) => {
        const content = args.join(" ")
		if(content) {
        await db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        message.channel.send(`Your AFK has been set to "${content}"`)       
		} else {
			await db.set(`afk_${message.author.id}+${message.guild.id}`, "AFK")
        message.channel.send(`Your AFK has been set to "AFK"`)  
		}
    }
}