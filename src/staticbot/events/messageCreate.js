const client = require("../index");
const db = require('quick.db')

client.on("messageCreate", async (message) => {
	if(message.author.bot) return;
	// ______________________________________
	// AFK
	// ______________________________________
	if(db.has(`afk_${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk_${message.author.id}+${message.guild.id}`)
        await db.delete(`afk_${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
    // Check for mentions
    if(message.mentions.members.first()) {
        if(db.has(`afk_${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + "is AFK, \"" + db.get(`afk_${message.mentions.members.first().id}+${message.guild.id}` + "\""))
        }else return;
	}else;
	// ______________________________________
	// Commands
	// ______________________________________
	try {
	let prefix = await db.fetch(`prefix_${message.guildId}`);
	if (prefix) {
	if(message.mentions.users.first()) {
        if(message.mentions.users.first().id === '961251547772235777') return message.channel.send(`My prefix in **${message.guild.name}** is ${prefix}`)
    }
    if (
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
	} else {
		let standardPrefix = "!"
		if(message.mentions.users.first()) {
        if(message.mentions.users.first().id === '961251547772235777') return message.channel.send(`My Prefix in **${message.guild.name}** is ${standardPrefix}`)
    }
		if (
        !message.guild ||
        !message.content.toLowerCase().startsWith(standardPrefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(standardPrefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
	}
	} catch(err) { console.log(err) }
});
