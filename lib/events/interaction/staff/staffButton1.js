// Do not change or it won't work, we've made it so that you can't tamper with this ;)

const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')

const staff2 = (interaction) => {
	const staff = ["700641965787709520", "814819543348281374", "482214234193788980"]
	const staffButton = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('ostaff')
				.setLabel('Offical Static Bot Staff')
				.setStyle(ButtonStyle.Primary)
				.setEmoji({ name: "StaticBot", id: "1020974440768610355", animated: false })
				.setDisabled(true)
		)
	if(staff.includes(interaction.member.id)) return { isStaff: true, row: staffButton};
	return { isStaff: false };
}

module.exports = staff2