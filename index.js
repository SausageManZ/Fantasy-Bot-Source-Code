const Discord = require('discord.js');
const Config = require('./configuration.json');
const Token = require('./token.json');
const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Could not find command.")
        return;
    } 
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

const raidRem = new Discord.RichEmbed();
raidRem.color = 0xf44242;
raidRem.title = "REMINDER: RAID TONIGHT STARTING AT 8PM EUROPEAN TIME";
raidRem.addField("NORMAL RAID SCHEDULE: ", "WEDNESDAYS AND SUNDAYS FROM 8PM TO 11PM EUROPEAN TIME.", false)
raidRem.addField("Get READY!", 
"Prepare yourself for the raid tonight. If you want to come to the raid make sure you have time to" +
" stay here until 11PM European time. If you're persistent on suddenly being absent on a raid we may restrict you from  " +
"being able to raid for quite some time. So BE PREPARED!"
, false);
raidRem.addField("Ingredients for flasks: ", 
"Intellect Flask - 5 Anchor weed, 10 winters kiss, 15 river bud.\n" +
"Agility Flask -  5 Anchor Weed,  10 Acunda's Bite, 15 Sea Stalk\n" +
"Strength Flask - 5 Anchor Weed, 10 Acunda's Bit, 15 Siren's Pollen\n" +
"Stamina Flask - 5 Anchor Weed, 10 Winters Kiss, 15 Star Moss\n"
, false);
raidRem.addField("See you at the raid folks!", ":D", false);
raidRem.setThumbnail("https://i.imgur.com/7HOxuQr.png");

var raidSoon = new Discord.RichEmbed();
raidSoon.color = 0xf45642;
raidSoon.title = "RAID STARTING IN ONE HOUR";

var raidNow = new Discord.RichEmbed();
raidNow.color = 0xf45642;
raidNow.title = "__RAID IN PROGRESS__";

var raidEnd = new Discord.RichEmbed();
raidEnd.color = 0xf45642;
raidEnd.title = "END OF RAID. CHECK LOGS CHANNEL FOR NEW LOG. THANKS FOR PLAYING EVERYONE!";

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready to roll! Running on ${bot.guilds.size} servers!`);
    bot.user.setActivity("the " + Config.prefix + "assist command", {type: "LISTENING"});
});

var guildID = "468149366486597652";
var channelID = "493483660406816779";

bot.login(Token.token).then(() => {
    console.log("Logged in!");
    var channel = bot.guilds.get(guildID).channels.get(channelID);
    bot.guilds.get(guildID).channels.get("493540540860727296").send("Systems are online!");
    var interval = setInterval (function () {
        var d = new Date();
        if (d.getMinutes() === 1 && d.getSeconds() === 3) {
            if (d.getDay() === 3 || d.getDay() === 7) {
                if ((d.getHours() === 10 || 
                    d.getHours() === 14 ||
                    d.getHours() === 16 ||
                    d.getHours() === 18)
                ) {
                    channel.send(raidRem);
                } else if (d.getHours() === 19) {
                    channel.send(raidSoon);
                } else if (d.getHours() === 20) {
                    channel.send(raidNow);
                } else if (d.getHours() === 23) {
                    channel.send(raidEnd);
                } 
            }
        }
    }, 1000);    
});

bot.on("message", async message => {
    if (message.author.bot) return; 
    let prefix = Config.prefix;
    let msgArray = message.content.split(" ");
    let cmd = msgArray[0];
    let args = msgArray.slice(1);
    let cmdFile = bot.commands.get(cmd.slice(prefix.length));
    if (cmdFile) cmdFile.run(bot, message, args);
});
