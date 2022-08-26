const {MessageEmbed} = require("discord.js")

module.exports = (msg, bot ,args) => {
const embed = new MessageEmbed()
  .setTitle(':flag_tr: Türkiyemizin saati aşağıda yazmaktadır')
.setTimestamp()
.setFooter('Türkiyemizin Saati ->')
.setColor("RANDOM")

  msg.channel.send({embeds: [embed]})
}

module.exports.conf = {
    name: "saat",
    aliases: ["zaman"],
    perm: 0
};