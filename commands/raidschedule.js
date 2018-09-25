const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    var interval = setInterval (function () {
        // use the message's channel (TextChannel) to send a new message
        message.channel.send("123")
        .catch(console.error); // add error handling here
    }, 1 * 1000); 
}

module.exports.help = {
    name: "raidschedule"
}
