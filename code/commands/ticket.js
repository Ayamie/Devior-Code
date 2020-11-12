const Discord = require('discord.js');

const ticketId = "771360580820533258"
const check = '✅'
const roleSupport = "770367479989928006"

module.exports = {
    name: "ticket",
    minArgs: 1,
    expectedArgs: "<message>",
    execute(message, args) {
        if (message.content === "d.ticket") {
            const ticketWarn = new Discord.MessageEmbed()
            .setTitle("Ticket")
            .setDescription("Merci d'utiliser `d.ticket open` pour ouvrir un ticket ou `d.ticket close le-nom-du-channel-sans-#` pour fermer un ticket.")

            message.channel.send(ticketWarn)
            message.channel.bulkDelete(1)
        }

        else if (args[0] === "open") {
            const { guild, member, server } = message
    
        let ticketCreator = message.author.username;

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
        .setDescription(`Regarde si ton message d'aide à été réagis avec ${check} dans le salon #${ticketId}`)

        message.channel.bulkDelete(1)

        message.guild.channels.create(`${ticketCreator} ticket`)
        .then(console.log)
        .catch(console.error);
        
        message.author.send(`<@${member.id}>`, ticketMP)
        }
        else if (args[0] === "close") {
            if (message.member.hasPermission('MANAGE_CHANNELS')) {
                const fetchedChannel = message.guild.channels.cache.find(ch => ch.name === `${args[1]}`);
    
            fetchedChannel.delete()
            .catch(err => {
                console.error(err);
            });
            message.channel.bulkDelete(1)
            }
        }
    },
}
