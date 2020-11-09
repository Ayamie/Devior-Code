const Discord = require('discord.js');

const ticketId = '771360580820533258'
const check = '✅'
const roleSupport = "770367479989928006"

module.exports = {
    name: "ticket",
    minArgs: 1,
    expectedArgs: "<message>",
    execute(message) {
        const { guild, member, server } = message

        const channel = guild.channels.cache.get(ticketId)

        const ticketEmbed = new Discord.MessageEmbed()
        .setTitle(`Nouvelle demande d'aide`)
        .setDescription(`Un nouveau ticket à été ouvert par <@${member.id}>`);

        channel.send(`<@&${roleSupport}>`, ticketEmbed)
        .then(ticketMessage => {
            ticketMessage.react(check)
        })
        message.channel.bulkDelete(1)
        
        const ticketMP = new Discord.MessageEmbed()
        .setTitle(`Message`)
        .setDescription(`Regarde si ton message d'aide à été réagis avec ${check} dans le salon <#${ticketId}>`)

        message.channel.bulkDelete(1)
        
        message.channel.send(`<@${member.id}>`, ticketMP)
    },
}