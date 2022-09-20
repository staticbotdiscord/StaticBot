const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    PermissionsBitField,
    EmbedBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setNameLocalizations({
            fr: 'interdire',
        })
        .setDescription('Bans the player specified.')
        .setDescriptionLocalizations({
            fr: 'Kick le joueur spécifié.',
        })
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption((option) =>
            option
                .setName('user')
                .setNameLocalizations({
                    fr: 'utilisateur',
                })
                .setDescription('The user to kick.')
                .setDescriptionLocalizations({
                    fr: "L'utilisateur à frapper.",
                })
                .setRequired(true),
        )
        .addStringOption((option) =>
            option
                .setName('reason')
                .setNameLocalizations({
                    fr: 'raison',
                })
                .setDescription('Reason for the kick.')
                .setDescriptionLocalizations({
                    fr: 'La raison du coup de pied.',
                })
                .setRequired(false),
        ),
    ephemeral: false,
    async execute(client, interaction, options) {
        const locales2 = {
            fr: "Je n'ai pas la permission d'exclure des membres",
        };
        const embed2 = new EmbedBuilder()
            .setDescription(
                locales2[interaction.locale] ??
                    "I don't have permission to ban members",
            )
            .setColor('#c71212');
        if (
            !interaction.guild.members.me.permissions.has(
                PermissionsBitField.Flags.BanMembers,
            )
        )
            return await interaction.editReply({
                content: null,
                embeds: [embed2],
            });
        const memberPosition =
            interaction.options.getMember('user').roles?.highest.rawPosition;
        const moderationPosition =
            interaction.member.roles?.highest.rawPosition;
        const myPosition =
            interaction.guild.member.me.roles?.highest.rawPosition;
        const locales3 = {
            fr: "Votre rôle n'est pas supérieur au rôle de la personne que vous essayez de modérer",
        };
        const embed3 = new EmbedBuilder()
            .setDescription(
                locales3[interaction.locale] ??
                    "Your role is not higher than the person you are trying to moderate's role",
            )
            .setColor('#c71212');
        if (moderationPosition <= memberPosition)
            return await interaction.editReply({
                content: null,
                embeds: [embed3],
            });
        const locales4 = {
            fr: "Mon rôle le plus élevé n'est pas supérieur au rôle le plus élevé de la personne que vous essayez de modérer",
        };
        const embed4 = new EmbedBuilder()
            .setDescription(
                locales4[interaction.locale] ??
                    "My highest role is not higher than the person you are trying to moderate's highest role",
            )
            .setColor('#c71212');
        if (myPosition <= memberPosition)
            return await interaction.editReply({
                content: null,
                embeds: [embed4],
            });
        const locales = {
            fr:
                'Coup de pied pour!' +
                interaction.options.getMember('user') +
                '!',
        };
        const locales1 = {
            fr: 'Demandé par: ',
        };
        const embed = new EmbedBuilder()
            .setDescription(
                locales[interaction.locale] ??
                    'Kicked' + interaction.options.getMember('user') + '!',
            )
            .setColor('05c200');
        const reason =
            interaction.options.getString('reason') ?? 'No reason specified';
        const request = locales1[interaction.locale] ?? 'Requested by: ';
        interaction.options
            .getMember('user')
            .kick(locales1 + interaction.member.tag + ' : ' + reason);
        await interaction.editReply({ content: null, embeds: [embed] });
    },
};
