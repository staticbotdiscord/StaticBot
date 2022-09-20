const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-role')
        .setNameLocalizations({
            fr: 'ajouter-un-rôle',
        })
        .setDescription('Gives a user a specified role.')
        .setDescriptionLocalizations({
            fr: 'Donne à un utilisateur un rôle spécifié.',
        })
        .setDMPermission(true)
        .setDefaultMemberPermissions()
        .addUserOption((option) =>
            option
                .setName('user')
                .setNameLocalizations({
                    fr: 'utilisateur',
                })
                .setDescription('The user to add a role to.')
                .setDescriptionLocalizations({
                    fr: "L'utilisateur auquel ajouter un rôle.",
                })
                .setRequired(true),
        )
        .addRoleOption((option) =>
            option
                .setName('role')
                .setNameLocalizations({
                    fr: 'rôle',
                })
                .setDescription('The role to add.')
                .setDescriptionLocalizations({
                    fr: 'Le rôle à ajouter.',
                })
                .setRequired(true),
        ),
    ephemeral: false,
    async execute(client, interaction, options) {
        const locales1 = {
            fr: "Le bot n'a pas la permission d'exécuter cette commande!",
        };
        if (
            !interaction.guild.members.me.permissions.has(
                PermissionsBitField.ManageRoles,
            )
        )
            return interaction.editReply({
                content:
                    locales1[interaction.locale] ??
                    'The bot does not have permission to perform this command!',
            });

        const member = interaction.options.getMember('user');
        const role = interaction.options.getRole('role');
        const locales2 = {
            fr: "Votre rôle n'est pas supérieur au rôle de la personne que vous essayez de modifier.",
        };
        if (
            member.roles.highest.position >=
            interaction.member.roles.highest.position
        )
            return interaction.editReply({
                content:
                    locales2[interaction.locale] ??
                    "Your role is not higher than the person you are trying to edit's role.",
            });
        const locales3 = {
            fr: "Votre rôle n'est pas supérieur au rôle que vous essayez d'ajouter.",
        };
        if (interaction.member.roles.highest.position <= role.position)
            return interaction.editReply({
                content:
                    locales3[interaction.locale] ??
                    'Your role is not higher than the role you are trying to add.',
            });

        member.roles.add(role);
        const locales4 = {
            fr:
                'Le rôle `' +
                role.name +
                '` a été ajouté à `' +
                member.user.tag +
                '` avec succès.',
        };
        interaction.editReply({
            content:
                locales4[interaction.locale] ??
                'The role `' +
                    role.name +
                    '` has been added to `' +
                    member.user.tag +
                    '` successfully.',
        });
    },
};
