const Discord = require('discord.js');

module.exports = {
    name: 'dev-ping',
    description: 'Get the code of ping command.',
    execute(message) {

        message.channel.bulkDelete(1)
        
        const devPingEmbed = new Discord.MessageEmbed()
        .setTitle('Ping code')
        .setColor('RANDOM')
        .setDescription("Ajoute un fichier avec comme nom `ping.js` dans le fichier `commands`")
        .setImage('https://cdn.discordapp.com/attachments/766245466131398666/769533948064694292/ping.PNG')
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(devPingEmbed);        
    }
};