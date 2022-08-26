const {MessageEmbed} = require("discord.js")

module.exports = (msg, bot, args) => {
    const embed = new MessageEmbed()
   .setTitle("Botu Davet Et")
 .setURL("https://discord.com/oauth2/authorize?client_id=788082772375896086&permissions=8&scope=bot")
 .setDescription(`

**s!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`s!davet\`
Botu davet etmek için: \`s!davet\`
`)
 .addField("-komutlar (13)", `
herkesin kullanabileceği standart komutlar;
\`avatar\`,\`davet\`,\`havadurumu\`,\`oylama\`,\`password\`,\`ping\`,\`saat\`,\`speedtest\`,\`sunucubilgi\`,\`tavsiye\`,\`çekiliş\`
`)
 .addField("-eğlence (18)", `
herkesin kullanabileceği eğlence komutları;
\`balık-tut\`,\`düello\`,\`dürt\`,\`fakemesaj\`,\`adamasmaca\`,\`aşk\`,\`token\`,\`kedi\`,\`piyango\`,\`slot\`,\`stresçarkı\`,\`söv\`,\`tekme\`,\`windows\`,\`yazı-tura\`,\`şanslırengim\`,\`şanslısayım\`,\`dans\`,\`espri\`,\`mesajdöndür\`
`)
 .addField("-Yetkili (2)", `
herkesin kullanabileceği eğlence komutları;
\`reklamtaraması\`,\`slowmode\`
`)
.setTitle("Destek Sunucusu")
.setURL("https://discord.gg/JWT2YdjKFT")
    .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL())
        .setImage("https://cdn.discordapp.com/attachments/726848744435482705/796470200727634000/bruh.gif")
        .setColor("GREEN")
    .setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL()})
    
    msg.channel.send({embeds: [embed]})
}

module.exports.conf = {
    name: "yardım",
    perm: 0,
    category: "bilgi",
    aliases: ["yardım", "help", "yardım"]
}