const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Get the list of all commands.',
    execute(message, args) {

        message.channel.bulkDelete(1)
        
        if (message.content === "d.help") {
            const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle('Liste des Commandes')
        .setColor('RED')
        .setDescription("Préfix : `d.`\n\n[]: Obligatoire, (): Pas obligatoire")
        .addFields(
            { name: "Nombres de commandes", value: "`21`" },
            { name: "Utilitaire", value: "`d.ping`, `d.botinfo`, `d.suggest [message]`, `d.support`, `d.invite`, `d.avatar (utilisateur)`, `d.server-infos`, `d.ticket`" },
            { name: "Logiciels", value: "`d.node-install`, `d.vsc-install`" },
            { name: "Administration", value: "`d.clear [number]`, `d.annonce [message]`, `d.ban [user]`, `d.kick [user]`" },
            { name: "Codage", value: "`d.dev-clear`, `d.dev-ping`" },
            { name: "Musique", value: "`d.join`, `d.leave`, `d.play [YT link]`" },
        )
        .setTimestamp()
        .setFooter('Bot created by ValRedstone#6507');

        message.channel.send(helpEmbed);
        }
        else if (args[0] === 'ping') {
            const pingEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande ping")
            .setColor('RED')
            .setDescription("Donne la latence du bot")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(pingEmbed)
        }
        else if (args[0] === "botinfo") {
            const botinfoEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande botinfo")
            .setColor('RED')
            .setDescription("Donne toute les informations du bot.\nAutre commande: `d.bi`")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(botinfoEmbed)
        }
        else if (args[0] === "suggest") {
            const suggestEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande suggest")
            .setColor('RED')
            .setDescription("`d.suggest votre message`\nPermet de faire une suggestion.")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(suggestEmbed)
        }
        else if (args[0] === "support") {
            const supportEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande support")
            .setColor('RED')
            .setDescription("Donne le lien du support de Devior")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(supportEmbed)
        }
        else if (args[0] === "invite") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande invite")
            .setColor('RED')
            .setDescription("Donne un lien pour inviter Devior sur son serveur.")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(Embed)
        }
        else if (args[0] === "avatar") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande avatar")
            .setColor('RED')
            .setDescription("`d.avatar <mention>`\nDonne l'avatar de la personne mentionné ou donne l'avatar de celui qui a executé la commande\n\n`< >`: pas obligatoire")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(Embed)
        }
        else if (args[0] === "server-infos") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande server-infos")
            .setColor('RED')
            .setDescription("Donne les informations du serveur d'où a été executé la commande.\nAutre commande: ``d.si`")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(Embed)
        }
        else if (args[0] === "ticket") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande ticket")
            .setColor('RED')
            .setDescription("Ouvre un ticket pour une demande d'aide.\n`d.ticket open`: ouvre le ticket\n`d.ticket close nom-du-ticket-sans-#`: ferme un ticket.")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507");

            message.channel.send(Embed)
        }
        else if (args[0] === "clear") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande clear")
            .setColor('RED')
            .setDescription('`d.clear [nombre entre 1 et 99]`\nSupprime le nombre de messages donnés.\n`[ ]`: obligatoire')
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "annonce") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande annonce")
            .setColor('RED')
            .setDescription("`d.annonce [message]`\nPermet de faire une annonce sous forme d'embed.\n`[ ]`: obligatoire")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "ban") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande ban")
            .setColor('RED')
            .setDescription("`d.ban [utilisateur]`\nPermet de bannir un utilisateur.\n`[ ]`: obligatoire")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "kick") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande kick")
            .setColor('RED')
            .setDescription("`d.kick [utilisateur]`\nPermet d'expulser un utilisateur.\n`[ ]: obligatoire`")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "join") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande join")
            .setColor('RED')
            .setDescription('Permet au bot de rejoindre le salon vocal ou vous êtes.')
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "leave") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande")
            .setColor('RED')
            .setDescription('Permet de faire quitter le salon vocal ou se trouve le bot.')
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
        else if (args[0] === "play") {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("Commande play")
            .setColor('RED')
            .setDescription("`d.play [lien youtube]`\nPermet de jouer une musique avec le lien youtube donné.\n`[ ]: obligatoire`")
            .setTimestamp()
            .setFooter("Bot created by ValRedstone#6507")

            message.channel.send(Embed)
        }
    }
};
