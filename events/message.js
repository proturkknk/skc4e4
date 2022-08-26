const {Permissions, Collection} = require("discord.js")
let prefix = "s!" 

const canUse = (member, cmd) => {
    let perm = 0;
    if(member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) perm = 1
    if(member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) perm = 2
    if(member.permissions.has(Permissions.FLAGS.MANAGE_SERVER)) perm = 3
    if(member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) perm = 4
    return perm >= cmd.conf.perm;
}

module.exports = (msg, bot) => {
    if(!msg.content.startsWith(prefix)) return;
    if(msg.author.bot) return
    if(!msg.guild) return
    const command = msg.content.split(" ")[0].slice(prefix.length).toLowerCase()
    const args = msg.content.split(" ").slice(1)
    let cmd
    if(bot.cmds.has(command)){
        cmd = bot.cmds.get(command)
    }else if(bot.as.has(command)){
        cmd = bot.cmds.get(bot.as.get(command))
    }
    if(!cmd) return
    if(canUse(msg.member, cmd)){
        cmd(msg, bot, args)
    }
}