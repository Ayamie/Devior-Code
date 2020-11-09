const Discord = require('discord.js');

module.exports = {
    name: 'node-2',
    description: 'Get the code of ping command.',
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        const nodeEmbed = new Discord.MessageEmbed()
        .setTitle('Node installation')
        .setColor('RANDOM')
        .setDescription("Dès que tu as installé l'installateur ouvre le.\nClique sur next jusque avoir ce bouton `voir image en dessous`\nUne fois que tu as cliqué sur ce bouton appuie sur next.\nVoilà node.js est installé !")
        .setImage("https://cdn.discordapp.com/attachments/769873127344832555/770285959941718087/node2.PNG")
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(nodeEmbed);        
    }
};