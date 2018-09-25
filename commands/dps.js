const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
      message.author.reply("Prototype command called!");
}

module.exports.help = {
    name: "dps"
}
