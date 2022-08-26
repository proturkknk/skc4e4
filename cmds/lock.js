const {MessageEmbed, Permissions} = require("discord.js")
const calculator = require('discord-bitfield-calculator');

module.exports = (msg, bot ,args) => {
    const pm = calculator.permissions(Number(msg.channel.permissionsFor(msg.channel.guild.roles.everyone).bitfield));
    if(pm.includes("SEND_MESSAGES")){
    msg.channel.permissionOverwrites.create(msg.channel.guild.roles.everyone, {VIEW_CHANNEL: true, SEND_MESSAGES: false, SEND_TTS_MESSAGES: false, SEND_MESSAGES_IN_THREADS: false, CREATE_PUBLIC_THREADS: false, CREATE_PRIVATE_THREADS: false}).then(() => {
        msg.channel.send({embeds: [
            new MessageEmbed()
            .setTitle("Kanal Kilitlendi")
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor("RED")
        ]})
    })
    }else{
        msg.channel.permissionOverwrites.delete(msg.channel.guild.roles.everyone).then(() => {
            msg.channel.send({embeds: [
            new MessageEmbed()
            .setTitle("Kanal Açıldı")
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor("GREEN")
        ]})
        })
    }
}

module.exports.conf = {
    name: "lock",
    category: "Moderasyon",
    aliases: ["kilitle", "lock-channel", "kanal-kilitle", "kanalı-kilitle"],
    perm: 2
};