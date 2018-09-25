const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    var interval = setInterval (function () {
      
    }, 1 * 1000); 
    message.channel.send("Hello world!")
}

module.exports.help = {
    name: "raidschedule"
}
