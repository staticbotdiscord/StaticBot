const path = require('path')
const { readdirSync, lstatSync } = require('fs')
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = readdirSync(commandsPath);
const { Routes } = require('discord.js')
const { REST } = require('@discordjs/rest');
const rest = new REST({ version: '10' }).setToken(process.env["TOKEN"]);
const { clientId, guildId } = require('../../config')

const commands = (client) => {
	const commands = [];
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		if (lstatSync(filePath).isDirectory()) {
			const commandFiles1 = readdirSync(path.join(commandsPath, file))
			for (const file1 of commandFiles1) {
				if (!file1.endsWith('.js')) return;
				const filePath1 = path.join(commandsPath, file, file1);
				const command1 = require(filePath1);
				client.commands.set(command1.data.name, command1);
				commands.push(command1.data.toJSON());
			}
		} else if (lstatSync(filePath).isFile()) {
			if (!file.endsWith('.js')) return;
			const command = require(filePath);
			client.commands.set(command.data.name, command);
			commands.push(command.data.toJSON());
		}
	}
	if (guildId) {
		console.log('Located ' + commands.length + ' commands')
		rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
			.then(() => console.log('Commands Registed'))
			.catch(console.error);
		console.log('Registered ' + commands.length + ' commands')
	} else {
		console.log('Located ' + commands.length + ' commands')
		rest.put(Routes.applicationCommands(clientId), { body: commands })
			.then(() => console.log('Commands Registed'))
			.catch(console.error);
		console.log('Registered ' + commands.length + ' commands')
	}
}

module.exports = commands