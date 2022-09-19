const { thinkingMessage, thinkingMessageLocales } = require("../../config");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const client = interaction.client;
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command)
        return await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });

      const components = [];
      const staff2 = require("../../lib/events/interaction/staff/staffButton1")(
        interaction
      );
      if (staff2.isStaff === true) {
        components.push(staff2.row);
      }
      const staff1 = require("../../lib/events/interaction/staff/staffButton")(
        interaction
      );
      if (staff1.isStaff === true) {
        components.push(staff1.row);
      }
      if (command.ephemeral === true) {
        await interaction.reply({
          content:
            thinkingMessageLocales[interaction.locale] ?? thinkingMessage,
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content:
            thinkingMessageLocales[interaction.locale] ?? thinkingMessage,
          ephemeral: false,
          components: components,
        });
      }
      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.log(error);
        await interaction.editReply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }
  },
};
