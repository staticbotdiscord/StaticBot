const { staff, staffEmoji } = require('../../../../config')
const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')

const staff1 = (interaction) => {
	const staffButton = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('staff')
				.setLabel('Staff')
				.setStyle(ButtonStyle.Secondary)
				.setEmoji(staffEmoji)
				.setDisabled(true)
		)
	if(staff.includes(interaction.member.id)) return { isStaff: true, row: staffButton};
	return { isStaff: false };
}

module.exports = staff1