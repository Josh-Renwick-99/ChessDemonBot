const config = require("../config.js");
const { fenToEmoji, isFen, createFenEmbed } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");
const { request } = require('undici');

exports.run = async (client, message, args, level) => {
  const move = args[0];
  const url = `http://localhost:8081/move?discordId=${message.author.id}&move=${move}`;

  const {
    statusCode,
    body,
  } = await request(url);

  if (statusCode === 200){
    const game = await body.json();
    const turn = game.turn;
    const userName = message.member.user.tag;
    const fenString = game.position;
    const san = game.san;
    const mated = game.mated;
    let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
    const embed = createFenEmbed(emojiString, turn, userName, san, mated);
    message.channel.send({embeds: [embed]});
  } else if (statusCode === 400){
    message.channel.send(`Move ${move} is ilegal, try again`);
  }

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "move",
    category: "System",
    description: "Move a piece on the board.",
    usage: "move 'e4' for example"
  };