const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    var interval = setInterval (function () {
      var d = new Date();
        if (d.getDay() === 2 || d.getDay() === 7) {
            if (d.getHours() === 15 && d.getMinutes() === 28) {
                
            }
        }
    }, 1 * 1000); 
    
}

module.exports.help = {
    name: "raidschedule"
}
