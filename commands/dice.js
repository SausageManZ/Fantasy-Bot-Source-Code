const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    var bot = (Math.random()*6 + 1) | 0;
    var user = (Math.random()*6 + 1) | 0;
    message.author.send(
        "I rolled " + bot + ".\n" +
        "You rolled " + user + "."
    );
    
    var msg = "";
    if (bot > user) {
        msg = "I won! Better luck next time! :D";
    } else if (bot < user) {
        msg = "Aw man! I lost... :(";
    } else if (bot === user) {
        msg = "I guess it's a draw :|";
    }
    message.author.send(msg);
} 

module.exports.help = {
    name: "dice"
}
