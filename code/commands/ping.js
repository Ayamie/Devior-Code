const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Test command.',
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        message.channel.send(`Patiente...`)
        .then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            message.channel.bulkDelete(1)

            const pingEmbed = new Discord.MessageEmbed()
            .setDescription(`<:pong:771000709495783454> Pong !: ${ping}`)
            .setTimestamp()
            .setFooter('Bot created by ValRedstone#6507');

            message.channel.send(pingEmbed);
        })
    }
};