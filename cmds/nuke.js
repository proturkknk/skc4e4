module.exports = (msg, bot, args) => {
    msg.channel.clone().then(c => {
        c.setPosition(msg.channel.position)
        c.send("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
        msg.channel.delete()
    })
}

module.exports.conf = {
    name: "nuke",
    perm: 2,
    category: "Moderasyon",
    aliases: ["nuke-channel"]
}