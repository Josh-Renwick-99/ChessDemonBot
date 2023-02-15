const { assert } = require("chai");
const { MessageEmbed } = require('discord.js');
const { fenToEmoji } = require("../modules/fenUtils.js");

function createOpeningHelpEmbed(){
    const openingHelpEmbed = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle('Openings Book')
    .setDescription('Use the following buttons to open more infomation about the specified opening')
	.setTimestamp()

    return openingHelpEmbed;
}

function createEmbedsFromOpening(emojiCache, openId){

    const fs = require('fs');
    var opening = JSON.parse(fs.readFileSync(`data/openings/${openId}.json`));

    var embeds = [];

    for (let i = 1; i <= opening.moveLength; i++){
        const openingEmbed = new MessageEmbed()
        .setColor(0x0099FF)
        .setTitle(opening.name)
        .setDescription(fenToEmoji(opening.positions[i], emojiCache, true))
        .setFooter(opening.moves[i])
        .setTimestamp()
        embeds.push(openingEmbed);
    }
    return embeds;
}

module.exports ={
    createOpeningHelpEmbed,
    createEmbedsFromOpening,
}