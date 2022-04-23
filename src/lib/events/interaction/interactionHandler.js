// Class
class InteractionHandler {
	constructor() {}
	/*
		Checks if user is AFK
		@param [options] Options for db, message
		@returns {Message} String that sends a message if the user is afk.
		@example
		// With all parameters(Required)
		messageHandler.afk({ message: message, db: db })
	*/
	async commands(options) {
		const { interaction, client } = options
		if (interaction.isCommand()) {
        	await interaction.deferReply({ ephemeral: false }).catch(() => {});

        	const cmd = client.slashCommands.get(interaction.commandName);
        	if (!cmd) return interaction.followUp({ content: "An error has occured " });

        	const args = [];

        	for (let option of interaction.options.data) {
            	if (option.type === "SUB_COMMAND") {
                	if (option.name) args.push(option.name);
                	option.options?.forEach((x) => {
                    	if (x.value) args.push(x.value);
                	});
            	} else if (option.value) args.push(option.value);
        	}
        	interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        	cmd.run({ client, interaction, args });
    	}
  	}

	async buttons(options) {
		const { interaction, client } = options
		if (interaction.isButton()) {
        	await interaction.deferReply({ ephemeral: false });
        	const command = client.slashCommands.get(interaction.commandName);
        	if (command) command.run(client, interaction);
    	}
  	}

	async selectMenus(options) {
		const { interaction, client } = options
		if (interaction.isSelectMenu()) {
        	await interaction.deferReply({ ephemeral: false });
        	const command = client.slashCommands.get(interaction.commandName);
        	if (command) command.run(client, interaction);
    	}
  	}

	async contextMenus(options) {
		const { interaction, client } = options
		if (interaction.isContextMenu()) {
        	await interaction.deferReply({ ephemeral: false });
        	const command = client.slashCommands.get(interaction.commandName);
        	if (command) command.run(client, interaction);
    	}
  	}
}

module.exports = InteractionHandler