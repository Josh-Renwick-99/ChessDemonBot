const config = require("../config.js");
const { fenToEmoji, isFen, createFenEmbed } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");

exports.run = async (client, message, args, level) => {
  var XMLHttpRequest = require('xhr2');
  const move = args[0];
  const http = new XMLHttpRequest();
  const url = `http://localhost:8081/move?discordId=${message.author.id}&move=${move}`;
  console.log(url);
  http.open("GET", url);
  http.send();
  console.log(http.responseText);
  http.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE){
      const game = JSON.parse(http.responseText);
      const turn = game.turn;
      const userName = message.member.user.tag;
      const fenString = game.position;
      const san = game.san;
      let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
      const embed = createFenEmbed(emojiString, turn, userName, san);
      message.channel.send({embeds: [embed]});
    }
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