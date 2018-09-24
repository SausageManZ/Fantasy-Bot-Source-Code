const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    const embed = new Discord.RichEmbed();
    embed.title = "Here is a list of all the raiders in the guild with their roles";
    embed.color = 0x4141f4;
    embed.description = "";
    embed.description += "\n``DPS: `` **Yugerk, Prelia, Simtalnuis, Zatna, Jonasanjosu, Daevos, Ustraan, Zerad, Tazz**\n";
    embed.description += "\n``Tanks: `` **Phaint, Zarhariel**\n";
    embed.description += "\n``Healers: `` **Mösa, Kobbar, Therivyn, Unomir, Bijou**\n";
    message.author.send(embed);
}

module.exports.help = {
    name: "raidteam"
}