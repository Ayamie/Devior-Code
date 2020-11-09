const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    
    name: 'suggest',
    description: 'Suggestion command.',
    execute(message) {
        let msgArray = message.content.split(' ');
        msgArray.shift();
        const suggestion = msgArray.join(' ');
        message.channel.bulkDelete(1)
        const suggestEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Suggestion')
            .setTimestamp()
            .setFooter('Bot created by ValRedstone#6507')
            .setDescription(suggestion);

            
        message.channel.bulkDelete(1)
        message.channel.send('||@everyone||', suggestEmbed)
            .then(m => {
                m.react("✅");
                m.react("❌");
            });
    }
};