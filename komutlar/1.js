const discord = require("discord.js");
const moment = require("moment");

const os = require("os");

require("moment-duration-format");  

  

exports.run = async (client, message, args) => {
 let ip = args
    .filter(msg => isNaN(msg))
   .map(

      arg =>

        arg

          .charAt(0)

          .replace("i", "İ")

          .toUpperCase() + arg.slice(1)

    )

    .join(" ");
if (!ip)   return message.channel

      .send(

        new discord.MessageEmbed()

          .setColor("RED")

          .setDescription("Geçerli bir ip belirtmelisin!")

      )

      .then(x => x.delete({ timeout: 3000 }));
    let embed = new discord.MessageEmbed()

    .setColor("RANDOM")

    .setThumbnail(

     
      

    )

    .setDescription(

      `
      **Yeni Istek kod :**
      Server ip : **${ip}**
      Servere girecek bot ismi : **TheBot** (bot ismini istek üzerine değiştirlebilir)
      Version : otomatik
      Lütfen yetkililerin onaylamasını bekleyin
      
      `
    );

  
  client.channels.cache.get("874566779056320523").send(embed).react("heavy_check_mark").react("heavy_check_x");
  
};
exports.help = {

  name: "istek-bot",

};



                        