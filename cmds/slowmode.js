module.exports = (msg, bot, args) => {
    let time = args[0] ? args[0] : 0
    let reason = args[1] ? args.slice(1).join(" ") : "Sebep Belirtilmedi"

    msg.channel.setRateLimitPerUser(time, reason).then(() => {
        msg.channel.send(`Yavaş mod ${time} saniyeye ayarlandı`)
    })
}

module.exports.conf = {
    name: "slowmode",
    perm: 1,
    category: "Moderasyon",
    aliases: ["yavaş-mod", "yavaşmod", "slow-mode"]
}