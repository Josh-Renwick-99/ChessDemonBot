const config = require("../config.js");
const { fenToEmoji, isFen } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");

exports.run = async (client, message, args, level) => {
  var XMLHttpRequest = require('xhr2');
  const http = new XMLHttpRequest();
  const url = "http://localhost:8081/newgame?discordId=" + message.author.id;
  console.log(url);
  http.open("GET", url);
  http.send();
  console.log(http.responseText);
  http.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE){
      let fenString = http.responseText;
      let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
      message.channel.send(emojiString);
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