const config = require("../config.js");
const { fenToEmoji, isFen, createFenEmbed } = require("../modules/fenUtils.js");
const { settings } = require("../modules/settings.js");
const { request } = require('undici');
const { ChannelType } = require('discord.js');

exports.run = async (client, message, args, level) => {

  const threadName = message.author.username + message.channel.threads.cache.size;
  const thread = await message.channel.threads.create({
    name: threadName,
    autoArchiveDuration: 60,
    type: 'GUILD_PRIVATE_THREAD',
  });
  
  console.log(`Created thread: ${thread.name}`);
  await thread.members.add(message.author.id);
  const url = `http://localhost:8081/newgame?discordId=${message.author.id}&threadName=${threadName}`;
  const {
    statusCode,
    body,
  } = await request(url);

  if (statusCode === 200){
    const game = await body.json();
    const turn = game.turn;
    const userName = message.member.user.tag;
    const fenString = game.position;
    let emojiString = isFen(fenString) ? fenToEmoji(fenString, client.emojis.cache) : `'${fenString}' is not a valid FEN board position`;
    const embed = createFenEmbed(emojiString, turn, userName, 'N/A', false);
    thread.send({embeds: [embed]});
  } else if (statusCode === 400){
    thread.send(`Something has gone wrong, report this to JoshRS#7947`);
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