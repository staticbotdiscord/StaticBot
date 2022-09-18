const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setNameLocalizations({
			fr: 'donner-un-coup'
		})
		.setDescription('Kicks the player specified.')
		.setDescriptionLocalizations({
			fr: 'Kick le joueur spécifié.'
		})
		.setDMPermission(false)
		.setDefaultMemberPermissions(PermissionsFlagsBits.BanMembers)
		.addUserOption(option =>
			option.setName('user')
				.setNameLocalizations({
					fr: 'utilisateur'
				})
				.setDescription('The user to kick.')
				.setDescriptionLocalizations({
					fr: 'L\'utilisateur à frapper.'
				})
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setNameLocalizations({
					fr: 'raison'
				})
				.setDescription('Reason for the kick.')
				.setDescriptionLocalizations({
					fr: 'La raison du coup de pied.'
				})
				.setRequired(false)),
	ephemeral: false,
	async execute(client, interaction, options) {
		const locales = {
			fr: 'Coup de pied pour!' + interaction.options.getMember('user') + '!',
		};
		const locales1 = {
			fr: 'Demandé par: '
		}
		const reason = interaction.options.getString('reason') ?? 'No reason specified'
		const request = locales1[interaction.locale] ?? 'Requested by: '
		interaction.options.getMember('user').kick(locales1 + interaction.member.tag + ' : ' + reason)
		interaction.editReply({ content: locales[interaction.locale] ?? 'Kicked' + interaction.options.getMember('user') + '!'})
		
	}
}