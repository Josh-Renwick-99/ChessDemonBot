const { assert } = require("chai");
const { MessageEmbed } = require('discord.js');
const { fenToEmoji } = require("../modules/fenUtils.js");
const { request } = require('undici');

async function createEmbedsFromGames(emojiCache, author){                   

    const fs = require('fs');

    var embeds = [];

    const url = `http://localhost:8081/games?discordId=${author}`;

    const {
      statusCode,
      body,
    } = await request(url);
  
    if(statusCode === 200){
        const gameViews = await body.json();
        let emojiEmbeds = [];
    
        for (let i = 0; i < gameViews.length; i++){
            const fen = gameViews[i].position;
            const datePlayed = gameViews[i].date;
            const id = gameViews[i].gameId;
            const san = gameViews[i].san;
            const openingEmbed = new MessageEmbed()
            .setColor(0x0099FF)
            .setTitle("Use the buttons below to view your open games")
            .setDescription(fenToEmoji(fen, emojiCache, false))
            .addField("Date played: ", datePlayed === null ? "N/A" : datePlayed)
            .addField("Game ID: ", id.toString())
            .addField("Move History: ", san === null ? "N/A" : san)
            .setTimestamp()
            emojiEmbeds.push(openingEmbed);
        }
    
        return emojiEmbeds;
    }

}

module.exports ={
    createEmbedsFromGames,
}