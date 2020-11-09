const Discord = require('discord.js');

module.exports = {
    name: 'vsc-install',
    description: 'Get the code of ping command.',
    execute(message) {
        const nodeEmbed = new Discord.MessageEmbed()
        .setTitle('Visual Studio Code installation')
        .setColor('RANDOM')
        .setURL("https://code.visualstudio.com/")
        .setDescription("Clique sur Instalateur de ton choix et continue comme il te l'indiquent.\nVoilà Visual Studio Code est installé !")
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.bulkDelete(1)
        
        message.channel.send(nodeEmbed);        
    }
};