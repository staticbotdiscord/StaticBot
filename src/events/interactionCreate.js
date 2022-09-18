const { thinkingMessage, thinkingMessageLocales } = require('../../config')

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		const client = interaction.client
		if (interaction.isChatInputCommand()) {
		
			const command = client.commands.get(interaction.commandName);

			if(!command) return await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

			if(command.ephemeral === true) {
				await interaction.reply({content: thinkingMessageLocales[interaction.locale] ?? thinkingMessage, ephemeral: true })
			} else {
				await interaction.reply({content: thinkingMessageLocales[interaction.locale] ?? thinkingMessage, ephemeral: false })
			}
			try {
				await command.execute(client, interaction);
			} catch (error) {
				console.log(error);
				await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};