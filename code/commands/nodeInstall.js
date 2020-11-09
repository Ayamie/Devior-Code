const Discord = require('discord.js');

module.exports = {
    name: 'node-install',
    description: 'Get the code of ping command.',
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        const nodeEmbed = new Discord.MessageEmbed()
        .setTitle('Node installation')
        .setColor('RANDOM')
        .setURL("https://nodejs.org/fr/download/")
        .setDescription("Clique sur Instalateur Windows et continue comme il te l'indiquent.\nFait `d.node-2` pour continuer")
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(nodeEmbed);        
    }
};