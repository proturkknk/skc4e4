const db = require("../db/db.js")
const logger = require("../index.js")

module.exports = bot => {
    logger.log(`bot ${bot.user.tag} ismiyle giriş yaptı`)
    setInterval(() => {
        db.list().then(keys => {
            keys.forEach(key => {
                db.get(key).then(data => {
                    let guildid = key.split("_")[1]
                    let userid = key.split("_")[2]
    
                    let guild = bot.guilds.cache.get(guildid)
                    if(guild){
                        if(Date.now() >= data){
                            try{
                                guild.members.unban(userid)
                            }catch(e){
                               db.delete(key) 
                            }
                            db.delete(key)
                        }
                    }else{
                        db.delete(key)
                    }
                })
            })
        })
    },1000)
}