const {MessageEmbed} = require("discord.js")

module.exports = (msg, bot, args) => {
    let member = msg.mentions.members.first()
    if(!member) {
        if(!args[0]) return msg.reply("Kullanıcı Bulunamadı")
        msg.guild.members.fetch(args[0])
            .then(m => {
            if(m){
                let embed = new MessageEmbed()
                .setTitle(m.user.tag)
                .setColor("RANDOM")
                .setImage(m.user.displayAvatarURL())
                msg.channel.send({embeds: [embed]})
            }else{
                return msg.reply("Kullanıcı Bulunamadı")
            }
        })
        .catch(e => {msg.reply("Kullanıcı Bulunamadı")})
    }else{
        let embed = new MessageEmbed()
        .setTitle(member.user.tag)
        .setColor("RANDOM")
        .setImage(member.user.displayAvatarURL())
        msg.channel.send({embeds: [embed]})
    }
}

module.exports.conf = {
    name: "avatar",
    perm: 0,
    category: "eğlence",
    aliases: []
}