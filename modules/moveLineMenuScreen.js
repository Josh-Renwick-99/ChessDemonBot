const { MessageActionRow } = require("discord.js");

module.exports = async (interaction, pages, time = 60000) => {

if(!interaction || !pages || !(pages?.length > 0) || !(time > 10000)) throw new Error ("invalid parameters");

let index = 0, row = new MessageActionRow().addComponents([{
    type: "BUTTON",
    customId: "1",
    emoji: "⬅️",
    style: "PRIMARY",
    disabled: true
    },{
    type: "BUTTON",
    customId: "2",
    emoji: "➡️",
    style: "PRIMARY",
    disabled: pages.length < 2
    }])

    let data = {
    embeds: [pages[index]],
    components: [row],
    fetchReply: true
    }

    const msg = interaction.replied ? interaction.followUp(data) : await interaction.reply(data);

    const col = msg.createMessageComponentCollector({
    filter: i => i.user.id === interaction.user.id,
    })

    col.on('collect', (i) => {
    if (i.customId === "1") index--;
    else if (i.customId === "2") index++;
    else return col.stop()

        row.components = [{
            type: "BUTTON",
            customId: "1",
            emoji: "⬅️",
            style: "PRIMARY",
            disabled: index === 0
            },{
            type: "BUTTON",
            customId: "2",
            emoji: "➡️",
            style: "PRIMARY",
            disabled: pages.length < index + 1
            }];
            i.update({
            components:[row],
            embeds:[pages[index]]
            })
        });
        col.on('end', () => {
        msg.edit({
            components:[]
        })
    })
}