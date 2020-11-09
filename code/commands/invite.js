const Discord = require('discord.js');

module.exports = {
    name: "invite",
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        const inviteEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle('Invite Link')
        .setColor('#1c1b1a')
        .setURL('https://discord.com/oauth2/authorize?client_id=767675736525897728&scope=bot&permissions=8')
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(inviteEmbed);
    }
}