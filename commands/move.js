const config = require("../config.js");
const { fenToEmoji, isFen, createFenEmbed } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");
const { request, fetch } = require('undici');

exports.run = async (client, message, args, level) => {
  const move = args[0];
  var url = `http://localhost:8081/getThread?discordId=${message.author.id}`;
  console.log(url);
  const {
    body
  } = await request(url);
  const threadName = await body.text();
  
  if(threadName === message.channel.name){
    url = `http://localhost:8081/move?discordId=${message.author.id}&move=${move}`;

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
      if (!isMated){
        let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
        const embed = createFenEmbed(emojiString, turn, userName, san, mated);
        message.channel.send({embeds: [embed]});
      } else {
        let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
        const embed = createFenEmbed(emojiString, turn, userName, san, mated);
        message.channel.send({embeds: [embed]});
        fetch(`http://localhost:8081/mated?discordId=${message.author.id}`)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }
    } else if (statusCode === 400){
      message.channel.send(`Move ${move} is ilegal, try again`);
    }
  } else {
    const threadArgs = threadName === null ? "You do not have an active game" : threadName;
    message.channel.send(`Try using the command inside the thread that is linked to your active game: ${threadArgs}`)
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