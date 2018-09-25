const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
      if(!bot.hasPermission("MANAGE_MEMBERS")) return message.author.send("Sorry, something went wrong!"); 
}

module.exports.help = {
    name: "dps"
}
