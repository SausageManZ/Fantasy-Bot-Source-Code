const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    embed.title = "Woo! You did a command!";
    embed.color = 0x42f4eb;
    embed.description = 
    "Hello! I am the artificially intelligent entity that will assist you with a fenomenal experience in the " +
    "Fantasy guild! I have many commands. But, rememeber to only send them to me privately in order to keep " +
    "the bot chat in the guild from spam. As you should know, the &&help command sent this message to you, and only you!" +
    " This counts for all commands, but you had my permission to type &&help in the bot chat once to start this " +
    "lovely convestation with you :) \n" +
    "Enough said! Here are my commands fellow guildie: \n" +
    "\n``&&help`` - **Well as you can tell it brought up this!**\n" +
    "\n``&&dice`` - **Play a game of die with me!**\n" +
    "\n``&&raidteam`` - **Displays a list of the current raid team and their roles**\n" +
    "\n``&&dps`` - **(PROTOTYPE) Assign yourself the DPS role on the server**\n";
module.exports.run = async(bot, message, args) => {

    message.author.send(embed);
}

module.exports.help = {
    name: "help"
}
