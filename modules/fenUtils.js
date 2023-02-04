const { default: FenParser } = require("@chess-fu/fen-parser");
const { assert } = require("chai");

function isFen(fenString){
    const fen = new FenParser(fenString);
    return fen.isValid;
}

function fenToEmoji (fenString, emojiCache){
    const fen = new FenParser(fenString);
    const emojiNames = ["rbsw", "hbsb", "bbsw", "qbsb", "qbsw", "kbsw", "kbsb", "bbsb", "hbsw", "rbsb", "pbsb", "pbsw", "sw", "sb", "rwsw", "kwsb", "hwsb", "bwsw", "qwsb", "qwsw", "kwsw", "bwsb", "hwsw", "rwsb", "pwsb", "pwsw", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "ra", "rb", "rc", "rd", "re", "rf", "rg", "rh", "sg"];

    const emojis = [];
    for (let emojiName of emojiNames) {
        emojis.push(emojiCache.find(emoji => emoji.name === emojiName));
    }
    let emojiString = "";
    let squareColour = true;
    for (let ranks of fen.ranks) {
        squareColour = !squareColour;
        console.log(ranks);
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
        emojiString += '\n';
    }
    return emojiString;
}

module.exports ={fenToEmoji};