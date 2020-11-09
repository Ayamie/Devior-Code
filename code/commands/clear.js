const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Delete messages.',
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (isNaN(amount)) {
                return message.reply("Ce n'est pas un nombre valide.");
            }
            else if (amount <= 0 || amount > 99) {
                return message.reply("Tu dois entrer un nombre compris entre `1` et `99`.");
            }
    
            message.channel.bulkDelete(amount + 1)
                .then(messages => console.log(`${messages.size - 1} messages supprimé.`))
        }
        else {
            message.channel.send("Tu ne peux pas utiliser cette commande car tu n'as pas la permission `MANAGE_MESSAGES`.")
        }
    }  
};