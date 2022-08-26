module.exports = async(req, res, bot) => {
    if(!req.session.discorduser) return {login: false}
    if(Date.now() >= req.session.expires){
        delete req.session.discorduser
        delete req.session.userguilds
        return {login: false}
    }else{
        return {login: true, user: req.session.discorduser, guilds: req.session.userguilds}
    }
}