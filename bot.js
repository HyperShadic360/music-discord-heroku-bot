const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
bot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
bot.music.start(bot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    botPrefix: PREFIX,

    maxQueueSize: 0,
    anyoneCanSkip: true,
    messageHelp: true,
    anyoneCanAdjust: true,
    anyoneCanLeave: true

});

// Events.
bot.on("ready", function() {
    bot.user.setActivity(`music`);
    console.log(`${bot.user.username} is Ready!`);
});

// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
