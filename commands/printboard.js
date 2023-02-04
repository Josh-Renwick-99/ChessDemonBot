const config = require("../config.js");
const { fenToEmoji } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");

exports.run = async (client, message, args, level) => {
  let fenString = args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue + " ";
  }, "");
  let emojiString = fenToEmoji(fenString, client.emojis.cache);
  message.channel.send(emojiString);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["printb", "pb"],
  permLevel: "User"
};

exports.help = {
  name: "printboard",
  category: "System",
  description: "Prints a chessboard.",
  usage: "printboard"
};