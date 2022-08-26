const {MessageEmbed, Permissions} = require("discord.js")
const ms = require("ms")
const db = require("../db/db.js")

module.exports = (msg, bot, args) => {
    const member = msg.mentions.members.first()
    if(!member) return msg.channel.send("Kimi yasaklamamı istiyorsun?")
    if(member.user.id == msg.author.id) return msg.channel.send("Kendini mi banlican keriz")
    if(member.user.id == bot.user.id) return msg.channel.send("Beni mi banlican keriz")
    if(member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return msg.channel.send("Bir yetkiliyi banlayamam")
    if(!args[1]) return msg.channel.send("Ne kadar süre yasaklamamı istersin? (0 = sınırsız)")
    if(!member.bannable) return msg.channel.send("Bu kullanıcıyı banlayamıyorum")
    let reason = args.slice(2) ? args.slice(2).join(" ") : "Sebep Belirtilmedi"
    let time = args[1] == 0 ? "Sınırsız" : args[1]
    msg.channel.send({embeds: [
        new MessageEmbed()
        .setTitle("Kullanıcı Banlandı")
        .setDescription(`Sebep: **${reason}**\nSüre: **${time}**`)
        .setColor("RED")
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
    ]})
    member.user.send({embeds: [
        new MessageEmbed()
        .setTitle(msg.guild.name+" Sunucusundan Banlandın")
        .setDescription(`Sebep: **${reason}**\nSüre: ${time}`)
        .setThumbnail(msg.guild.iconURL())
        .setColor("RED")
        .setTimestamp()
    ]})
    setTimeout(() => {
        member.ban({ deleteMessageDays: 7, reason: reason }).then(() => {
            if(args[1] != 0) db.set(`guildban_${msg.guild.id}_${member.user.id}`, Date.now() + ms(args[1]))
        })
    },400)
}

module.exports.conf = {
    name: "ban",
    perm: 2,
    category: "moderasyon",
    aliases: ["yasakla"]
}