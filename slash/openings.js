const config = require("../config.js");
const { createOpeningHelpEmbed, createEmbedsFromOpening } = require("../modules/openingsUtils.js");
const { settings } = require("../modules/settings.js");
const { MessageActionRow, MessageSelectMenu, MessageButton, Message } = require('discord.js');
const openMenu = require("../modules/openMenu.js");


exports.run = async (client, interaction) => {

  const openingHelpEmbed = createOpeningHelpEmbed();
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('qga')
      .setLabel('Queens gambit Accepted')
      .setStyle('PRIMARY'),
    new MessageButton()
      .setCustomId('qgd')
      .setLabel('Queens Gambit Declined')
      .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('lds')
    .setLabel('The London System')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('ckd')
    .setLabel('Caro Kann Defence')
    .setStyle('PRIMARY'),
  );
  await interaction.reply({embeds: [openingHelpEmbed], components: [row]});
  
  client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    const openId = interaction.customId;
    const embeds = createEmbedsFromOpening(client.emojis.cache, openId);
    openMenu(interaction, embeds);
  });
};

exports.commandData = {
  name: "openings",
  description: "Prints out the openings helper.",
  options: [],
  defaultPermission: true,
};

// Set guildOnly to true if you want it to be available on guilds only.
// Otherwise false is global.
exports.conf = {
  permLevel: "User",
  guildOnly: true
};