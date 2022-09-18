const { Command } = require('reconlx');
const db = require('quick.db');

module.exports = new Command({
    name: 'setprefix',
    description: 'Changes the server prefix',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'new-prefix',
            description: 'The new server prefix',
            type: 'STRING',
            required: true,
        },
    ],
    run: async ({ client, interaction }) => {
        if (!interaction.member.permissions.has('MANAGE_GUILD'))
            return interaction.followUp(
                'You do not have permission to perform this command.',
            );
        const prefix = interaction.options.getString('new-prefix');
        db.set(`prefix_${interaction.guild.id}`, prefix);
        interaction.followUp({ content: `Prefix changed to ${prefix}` });
    },
});
