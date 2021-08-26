const mineflayer = require('mineflayer');
const Discord = require ('discord.js');
const client = new Discord.Client();
function bot() {
const bot = mineflayer.createBot({

  host: "TheTurkishServer.ateros.me", 

  username: "TheTurkishBot" 

});
};
bot.on("chat", (username, message) => {
  

  console.log(username + " > " + message);
setTimeout(active, 5000);
  });

// Log errors and kick reasons:


bot.on("error", console.log);

 bot.on("kicked", function() {

    setTimeout(relog, 5000);
   console.log("yeniden deniyor..");
  });

 function relog() {

  

    bot = mineflayer.createBot(bot);



    };

function active(active2) {
  
 if (!bot.on("kicked"),
     !bot.on("end")) return;
  
  bot.setControlState('jump', true);
  
  bot.setControlState('jump', false);
  setTimeout(active2 ,5000)
  };
function active2 (active) {
  
  setTimeout(active , 5000)
  };