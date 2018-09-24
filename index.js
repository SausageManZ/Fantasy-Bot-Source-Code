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

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready to roll! Running on ${bot.guilds.size} servers!`);
    bot.user.setActivity("the " + Config.prefix + "help command", {type: "LISTENING"});
});

bot.login(Token.token);

bot.on("message", async message => {
    if (message.author.bot) return; 
  
    let prefix = Config.prefix;
    let msgArray = message.content.split(" ");
    let cmd = msgArray[0];
    let args = msgArray.slice(1);
    let cmdFile = bot.commands.get(cmd.slice(prefix.length));
    if (cmdFile) cmdFile.run(bot, message, args);  
});
