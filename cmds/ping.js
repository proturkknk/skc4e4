const {MessageEmbed} = require("discord.js")

module.exports = (msg, bot, args) => {
    let temp = Date.now()
    msg.channel.send("Ping hesaplanıyor lütfen bekleyin").then(m => {
        m.edit(`Pingim: **${Date.now() - temp}ms**`)
    })
}

module.exports.conf = {
    name: "ping",
    perm: 0,
    category: "bilgi",
    aliases: ["ms"]
}