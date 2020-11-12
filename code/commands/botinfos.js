const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');

module.exports = {
    name: 'bi',
    description: 'Bot informations.',
    execute(message) {

        message.channel.bulkDelete(1)
        
    const infoEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Bots Infos')
    .setDescription("Préfix : `d.`")
	.addFields(
        { name: '<:node:770635832510906388> Node version', value: `v12.18.4`, inline: true },
        { name: '<:discordjs:770635786012852226> Discord.js version', value: `v12.3.1`, inline: true },
        { name: 'Nombre de commandes', value: '21', inline: true },
        { name: 'Nombre de serveurs', value: `8` }
    )
    .addField("**Mémoire utilisée  ::**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
    .setTimestamp()
    .setFooter('Bot created by ValRedstone#6507');

         message.channel.send(infoEmbed);
    }
};