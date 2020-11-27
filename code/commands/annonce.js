const Discord = require('discord.js');

module.exports = {
    name: 'annonce',
    description: 'Make an annonce.',
    execute(message) {
        message.channel.bulkDelete(1)
        if (message.member.hasPermission('ADMINISTRATOR')) {
        let msgArray = message.content.split(' ');
        msgArray.shift();
        const annonce = msgArray.join(' '); //contenu de l'annonce
        const annonceEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Annonce')
            .setTimestamp()
            .setFooter('Bot created by ValRedstone#6507')
            .setDescription(annonce);

        message.channel.send('||@everyone||',annonceEmbed)
            .then(m => {
                m.react("✅");
            });
        }
        else {
            message.reply("Tu n'as pas la permission d'utiliser cette commande")
        }
    }
};
