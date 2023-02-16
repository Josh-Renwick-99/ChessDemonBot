const { default: FenParser } = require("@chess-fu/fen-parser");
const { assert } = require("chai");
const { MessageEmbed } = require('discord.js');

function createFenEmbed(emojiString, turn, userName, san, mated){
    if (!mated){
        return new MessageEmbed()
        .setColor(0x0099FF)
        .setTitle('Game')
        .setAuthor(userName)
        .addField('Turn: ', turn)
        .setDescription(emojiString)
        .addField('Move List: ', san)
        .setTimestamp()
    } else {
        return new MessageEmbed()
        .setColor(0x0099FF)
        .setTitle('Game')
        .setAuthor(userName)
        .addField('Turn: ', turn) 
        .setDescription(emojiString)
        .addField('Move List: ', san)
        .addField('CheckMate: ', turn === 'WHITE' ? "BLACK" : "WHITE")
        .setTimestamp()
    }
    return fenEmbed;
}

function isFen(fenString){
    const fen = new FenParser(fenString);
    return fen.isValid;
}

function printBottom(emojiCache, emojiString){

    const ra = emojiCache.find(emoji => emoji.name === 'ra');
    const rb = emojiCache.find(emoji => emoji.name === 'rb');
    const rc = emojiCache.find(emoji => emoji.name === 'rc');
    const rd = emojiCache.find(emoji => emoji.name === 'rd');
    const re = emojiCache.find(emoji => emoji.name === 're');
    const rf = emojiCache.find(emoji => emoji.name === 'rf');
    const rg = emojiCache.find(emoji => emoji.name === 'rg');
    const rh = emojiCache.find(emoji => emoji.name === 'rh');
    const sg = emojiCache.find(emoji => emoji.name === 'sg');

    emojiString += `${sg}${ra}${rb}${rc}${rd}${re}${rf}${rg}${rh}${sg}`
    let returnString = `${sg}${ra}${rb}${rc}${rd}${re}${rf}${rg}${rh}${sg}\n` + emojiString;
    return returnString;
}

function fenToEmoji (fenString, emojiCache, convert){

    var fen = null;
    if (convert) {
        fenString += " w KQkq - 0 1"
        fen = new FenParser(fenString);
    } else {
        fen = new FenParser(fenString);
    }
    const emojiNames = ["rbsw", "hbsb", "bbsw", "qbsb", "qbsw", "kbsw", "kbsb", "bbsb", "hbsw", "rbsb", "pbsb", "pbsw", "sw", "sb", "rwsw", "kwsb", "hwsb", "bwsw", "qwsb", "qwsw", "kwsw", "bwsb", "hwsw", "rwsb", "pwsb", "pwsw", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "ra", "rb", "rc", "rd", "re", "rf", "rg", "rh", "sg"];

    const emojis = [];
    for (let emojiName of emojiNames) {
        emojis.push(emojiCache.find(emoji => emoji.name === emojiName));
    }
    let emojiString = "";
    let squareColour = true;
    let rankNumber = 8;
    for (let ranks of fen.ranks) {
        emojiString += '<:c'+ rankNumber + ':' + (emojis.find(emoji => emoji.name === "c" + rankNumber) + '>');
        squareColour = !squareColour;
        for (let char of ranks){
            if (isNaN(char)){
                switch(char){
                    case 'r':
                        if (squareColour){
                            emojiString += '<:rbsw:' + (emojis.find(emoji => emoji.name === "rbsw") + '>');
                        } else {
                            emojiString += '<:rbsb:' + (emojis.find(emoji => emoji.name === "rbsb") + '>');
                        }
                        break;
                    case 'n':
                        if (squareColour){
                            emojiString += '<:hbsw:' + (emojis.find(emoji => emoji.name === "hbsw") + '>');
                        } else {
                            emojiString += '<:hbsb:' + (emojis.find(emoji => emoji.name === "hbsb") + '>');
                        }
                        break; 
                    case 'b':
                        if (squareColour){
                            emojiString += '<:bbsw:' + (emojis.find(emoji => emoji.name === "bbsw") + '>');
                        } else {
                            emojiString += '<:bbsb:' + (emojis.find(emoji => emoji.name === "bbsb") + '>');
                        }
                        break;
                    case 'q':
                        if (squareColour){
                            emojiString += '<:qbsw:' + (emojis.find(emoji => emoji.name === "qbsw") + '>');
                        } else {
                            emojiString += '<:qbsb:' + (emojis.find(emoji => emoji.name === "qbsb") + '>');
                        }
                        break;
                    case 'k':
                        if (squareColour){
                            emojiString += '<:kbsw:' + (emojis.find(emoji => emoji.name === "kbsw") + '>');
                        } else {
                            emojiString += '<:kbsb:' + (emojis.find(emoji => emoji.name === "kbsb") + '>');
                        }
                        break;
                    case 'p':
                        if (squareColour){
                            emojiString += '<:pbsw:' + (emojis.find(emoji => emoji.name === "pbsw") + '>');
                        } else {
                            emojiString += '<:pbsb:' + (emojis.find(emoji => emoji.name === "pbsb") + '>');
                        }
                        break;
                    case 'R':
                        if (squareColour){
                            emojiString += '<:rwsw:' + (emojis.find(emoji => emoji.name === "rwsw") + '>');
                        } else {
                            emojiString += '<:rwsb:' + (emojis.find(emoji => emoji.name === "rwsb") + '>');
                        }
                        break;
                    case 'N':
                        if (squareColour){
                            emojiString += '<:hwsw:' + (emojis.find(emoji => emoji.name === "hwsw") + '>');
                        } else {
                            emojiString += '<:hwsb:' + (emojis.find(emoji => emoji.name === "hwsb") + '>');
                        }
                        break; 
                    case 'B':
                        if (squareColour){
                            emojiString += '<:bwsw:' + (emojis.find(emoji => emoji.name === "bwsw") + '>');
                        } else {
                            emojiString += '<:bwsb:' + (emojis.find(emoji => emoji.name === "bwsb") + '>');
                        }
                        break;
                    case 'Q':
                        if (squareColour){
                            emojiString += '<:qwsw:' + (emojis.find(emoji => emoji.name === "qwsw") + '>');
                        } else {
                            emojiString += '<:qwsb:' + (emojis.find(emoji => emoji.name === "qwsb") + '>');
                        }
                        break;
                    case 'K':
                        if (squareColour){
                            emojiString += '<:kwsw:' + (emojis.find(emoji => emoji.name === "kwsw") + '>');
                        } else {
                            emojiString += '<:kwsb:' + (emojis.find(emoji => emoji.name === "kwsb") + '>');
                        }
                        break;
                    case 'P':
                        if (squareColour){
                            emojiString += '<:pwsw:' + (emojis.find(emoji => emoji.name === "pwsw") + '>');
                        } else {
                            emojiString += '<:pwsb:' + (emojis.find(emoji => emoji.name === "pwsb") + '>');
                        }
                        break;
                    case '-':
                        if (squareColour){
                            emojiString += '<:sw:' + (emojis.find(emoji => emoji.name === "sw") + '>');
                        } else {
                            emojiString += '<:sb:' + (emojis.find(emoji => emoji.name === "sb") + '>');
                        }
                        break;
                }
            } 
            squareColour = !squareColour;
        }
        emojiString += '<:c'+ rankNumber + ':' + (emojis.find(emoji => emoji.name === "c" + rankNumber) + '>');
        emojiString += '\n';
        rankNumber--;
    }
    return printBottom(emojiCache, emojiString);
}

module.exports = {
    isFen,
    fenToEmoji,
    createFenEmbed,
  };