const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.author.send("Raids occur on Wednesdays and Sundays from 8PM to 11PM European time");
}

module.exports.help = {
    name: "raidschedule"
}
