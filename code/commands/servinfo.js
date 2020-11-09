const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');


module.exports = {
    
    name: 'server-infos',
    description: 'Server informations.',
    execute(message) {
        const infoEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Serveur Informations')
	.addFields(
        { name: 'Propriétaire du serveur', value: `${message.guild.owner}` },
		{ name: 'Nom du serveur', value: `${message.guild.name}`, inline: true },
        { name: 'Nombre de membres', value: `${message.guild.memberCount}`, inline: true },
	)
	.setTimestamp()
    .setFooter('Bot created by ValRedstone#6507');

    message.channel.bulkDelete(1)
    
message.channel.send(infoEmbed);
    }
};