module.exports = {
    name: 'kick',
    description: 'Kick command.',
    execute(message) {
      
      message.channel.bulkDelete(1)
      
    const member = message.mentions.members.first()
    if (message.member.hasPermission('KICK_MEMBERS')) {
        if (!member) {
            return message.reply(`Utilisateur non spécifié ou pas trouvé.`)
          }
          if (!member.kickable) {
            return message.reply(`${member.user.tag} ne peut pas être expulsé.`)
          }
          return member
            .kick()
            .then(message.reply(`${member.user.tag} a été expulsé.`))
            .catch(error => message.reply(`Une erreur s'est produite.`))
    }
    else message.reply("Tu n'as pas la permission `KICK_MEMBERS`.")
  }
};