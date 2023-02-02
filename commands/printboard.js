const config = require("../config.js");
const { settings } = require("../modules/settings.js");
exports.run = async (client, message, args, level) => {
  const rbsw = client.emojis.cache.find(emoji => emoji.name === "rbsw");
  const hbsb = client.emojis.cache.find(emoji => emoji.name === "hbsb");
  const bbsw = client.emojis.cache.find(emoji => emoji.name === "bbsw");
  const qbsb = client.emojis.cache.find(emoji => emoji.name === "qbsb");
  const kbsw = client.emojis.cache.find(emoji => emoji.name === "kbsw");
  const bbsb = client.emojis.cache.find(emoji => emoji.name === "bbsb");
  const hbsw = client.emojis.cache.find(emoji => emoji.name === "hbsw");
  const rbsb = client.emojis.cache.find(emoji => emoji.name === "rbsb");

  const pbsb = client.emojis.cache.find(emoji => emoji.name === "pbsb");
  const pbsw = client.emojis.cache.find(emoji => emoji.name === "pbsw");

  const sw = client.emojis.cache.find(emoji => emoji.name === "sw");
  const sb = client.emojis.cache.find(emoji => emoji.name === "sb");


  const rwsw = client.emojis.cache.find(emoji => emoji.name === "rwsw");
  const hwsb = client.emojis.cache.find(emoji => emoji.name === "hwsb");
  const bwsw = client.emojis.cache.find(emoji => emoji.name === "bwsw");
  const qwsb = client.emojis.cache.find(emoji => emoji.name === "qwsb");
  const kwsw = client.emojis.cache.find(emoji => emoji.name === "kwsw");
  const bwsb = client.emojis.cache.find(emoji => emoji.name === "bwsb");
  const hwsw = client.emojis.cache.find(emoji => emoji.name === "hwsw");
  const rwsb = client.emojis.cache.find(emoji => emoji.name === "rwsb");

  const pwsb = client.emojis.cache.find(emoji => emoji.name === "pwsb");
  const pwsw = client.emojis.cache.find(emoji => emoji.name === "pwsw");

  const c1 = client.emojis.cache.find(emoji => emoji.name === "c1");
  const c2 = client.emojis.cache.find(emoji => emoji.name === "c2");
  const c3 = client.emojis.cache.find(emoji => emoji.name === "c3");
  const c4 = client.emojis.cache.find(emoji => emoji.name === "c4");
  const c5 = client.emojis.cache.find(emoji => emoji.name === "c5");
  const c6 = client.emojis.cache.find(emoji => emoji.name === "c6");
  const c7 = client.emojis.cache.find(emoji => emoji.name === "c7");
  const c8 = client.emojis.cache.find(emoji => emoji.name === "c8");
  
  const ra = client.emojis.cache.find(emoji => emoji.name === "ra");
  const rb = client.emojis.cache.find(emoji => emoji.name === "rb");
  const rc = client.emojis.cache.find(emoji => emoji.name === "rc");
  const rd = client.emojis.cache.find(emoji => emoji.name === "rd");
  const re = client.emojis.cache.find(emoji => emoji.name === "re");
  const rf = client.emojis.cache.find(emoji => emoji.name === "rf");
  const rg = client.emojis.cache.find(emoji => emoji.name === "rg");
  const rh = client.emojis.cache.find(emoji => emoji.name === "rh");

  const sg = client.emojis.cache.find(emoji => emoji.name === "sg");
  
  message.channel.send(`" "
  ${rbsw} ${hbsb} ${bbsw} ${qbsb} ${kbsw} ${bbsb} ${hbsw} ${rbsb}
  ${pbsb} ${pbsw} ${pbsb} ${pbsw} ${pbsb} ${pbsw} ${pbsb} ${pbsw}
  ${sw} ${sb} ${sw} ${sb} ${sw} ${sb} ${sw} ${sb}
  ${sb} ${sw} ${sb} ${sw} ${sb} ${sw} ${sb} ${sw}
  ${sw} ${sb} ${sw} ${sb} ${sw} ${sb} ${sw} ${sb}
  ${sb} ${sw} ${sb} ${sw} ${sb} ${sw} ${sb} ${sw}
  ${pwsw} ${pwsb} ${pwsw} ${pwsb} ${pwsw} ${pwsb} ${pwsw} ${pwsb}
  ${rwsb} ${hwsw} ${bwsb} ${kwsw} ${qwsb} ${bwsw} ${hwsb} ${rwsw}`);
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