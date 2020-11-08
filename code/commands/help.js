const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Get the list of all commands.',
    execute(message) {
        const devPingEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle('Liste des Commandes')
        .setColor('RED')
        .setDescription("Préfix : `d.`\n\n[]: Obligatoire, (): Pas obligatoire")
        .addFields(
            { name: "Nombres de commandes", value: "`21`" },
            { name: "Utilitaire", value: "`d.ping`, `d.botinfo`, `d.suggest [message]`, `d.support`, `d.invite`, `d.avatar (utilisateur)`, `d.server-infos`, `d.ticket`" },
            { name: "Logiciels", value: "`d.node-install`, `d.vsc`" },
            { name: "Administration", value: "`d.clear [number]`, `d.annonce [message]`, `d.ban [user]`, `d.kick [user]`" },
            { name: "Codage", value: "`d.devClear`, `d.devPing`" },
            { name: "Musique", value: "`d.join`, `d.leave`, `d.play [YT link]`" },
        )
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(devPingEmbed);        
    }
};
