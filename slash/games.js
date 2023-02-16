const config = require("../config.js");
const { createEmbedsFromGames } = require("../modules/gamesUtils.js");
const openMenu = require("../modules/moveLineMenuScreen.js");


exports.run = async (client, interaction) => {

    const embeds = await createEmbedsFromGames(client.emojis.cache, interaction.user.id);
    openMenu(interaction, embeds);
  
};

exports.commandData = {
  name: "games",
  description: "Prints out the users gammes.",
  options: [],
  defaultPermission: true,
};

// Set guildOnly to true if you want it to be available on guilds only.
// Otherwise false is global.
exports.conf = {
  permLevel: "User",
  guildOnly: true
};