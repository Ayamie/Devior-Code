const Discord = require('discord.js');

module.exports = {
    name: 'dev-clear',
    description: 'Get the code of ping command.',
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        const devClearEmbed = new Discord.MessageEmbed()
        .setTitle('Clear code')
        .setColor('RANDOM')
        .setDescription("Ajoute un fichier avec comme nom `clear.js` dans le fichier `commands`")
        .setImage('https://cdn.discordapp.com/attachments/766245466131398666/769535671982620682/clear.PNG')
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(devClearEmbed);        
    }
};