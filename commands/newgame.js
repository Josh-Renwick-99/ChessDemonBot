const config = require("../config.js");
const { fenToEmoji, isFen, createFenEmbed } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");

exports.run = async (client, message, args, level) => {
  var XMLHttpRequest = require('xhr2');
  const http = new XMLHttpRequest();
  const url = `http://localhost:8081/newgame?discordId=${message.author.id}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE){
      const game = JSON.parse(http.responseText);
      const turn = game.turn;
      const userName = message.member.user.tag;
      const fenString = game.position;
      let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
      const embed = createFenEmbed(emojiString, turn, userName, "N/A");
      message.channel.send({embeds: [embed]});
    }
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ng", "newg"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "New Game",
    category: "System",
    description: "Create a new game and prints the board.",
    usage: "newgame"
  };