module.exports = {
    name: 'ban',
    description: 'Ban command.',
    execute(message) {

      message.channel.bulkDelete(1);
      
    const member = message.mentions.members.first()
    if (message.member.hasPermission('BAN_MEMBERS')) {
        if (!member) {
            return message.reply(`Utilisateur non spécifié ou pas trouvé.`)
          }
          if (!member.ban) {
            return message.reply(`${member.user.tag} ne peut pas être banni.`)
          }
          return member
            .ban()
            .then(message.reply(`L'utilisateur ${member.user.tag} a été banni.`))
            .catch(error => message.reply(`Une erreur s'est produite.`))
    }
    else message.reply("Il vous manque la permission `Ban_MEMBERS`.")

  }
};