const { prefix, token } = require('./config.json');

const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Arrête de spammer.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** à été explusé pour raison: `spamming`.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** à été banni pour raison `spamming`.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR' ], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  const activities_list = [
    `d.help | Donne la liste de toute les commandes`,
    `Apprenez à faire votre bot discord avec moi.`,
    `Je suis dans ${client.guilds.cache.size} serveurs`,
    `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`
  ]
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 5000);  
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
        
    } catch (error) {
      console.error(error);
      message.reply(`Une erreur s'est produite durant l'execution de la commande.`);
    }
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "771013291605491803"
  )
  
  if (!channel) return

  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext("2d")

  const background = await Canvas.loadImage("./wallpaper.jpg")
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = "#74037b"
  ctx.strokeRect(0, 0, canvas.width, canvas.height)

  // Texte générique d'introduction avant le nom d'utilisateur
  ctx.font = "28px sans-serif"
  ctx.fillStyle = "#ffffff"
  ctx.fillText(
    `Bienvenue sur le serveur,`,
    canvas.width / 2.5,
    canvas.height / 3.5
  )

  // Ajouter le nom d'utilisateur
  ctx.font = applyText(canvas, `${member.displayName}`)
  ctx.fillStyle = "#ffffff"
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  )

  ctx.beginPath()
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  )
  ctx.drawImage(avatar, 25, 25, 200, 200)

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "bienvenue-image.png"
  )

  channel.send(`Bienvenue sur Devior • Support, ${member}!`, attachment)
  member.roles.add(member.guild.roles.cache.find(role => role.id === '770254394935345172'))
  member.setNickname(`• ${member.user.username} •`)
});

client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "771013535076712448"
  )
  if (!channel) return

  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext("2d")

  const background = await Canvas.loadImage("./wallpaper.jpg")
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = "#74037b"
  ctx.strokeRect(0, 0, canvas.width, canvas.height)

  // Texte générique d'introduction avant le nom d'utilisateur
  ctx.font = "28px sans-serif"
  ctx.fillStyle = "#ffffff"
  ctx.fillText(
    "Aurevoir,",
    canvas.width / 2.5,
    canvas.height / 3.5
  )

  // Ajouter le nom d'utilisateur
  ctx.font = applyText(canvas, `${member.displayName}`)
  ctx.fillStyle = "#ffffff"
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  )

  ctx.beginPath()
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  )
  ctx.drawImage(avatar, 25, 25, 200, 200)

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "aurevoir-image.png"
  )

  channel.send(`Aurevoir, ${member}!`, attachment)
});

client.on("guildCreate", server => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Merci de m'avoir ajouté sur ton serveur!")
    .setDescription("Voici le lien du serveur support: https://discord.gg/zNa3rdW")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter('Bot created by ValRedstone#6507');
  server.owner.send(embed);
});

antiSpam.on("error", (message, error, type) => {
	console.log(`${message.author.tag} couldn't receive the sanction '${type}', error: ${error}`);
});

antiSpam.on("banAdd", (member) => console.log(`${member.user.tag} has been banned.`));

antiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} has been kicked.`));

antiSpam.on("spamThresholdBan", (member) => console.log(`${member.user.tag} has reached the ban threshold.`));

antiSpam.on("spamThresholdKick", (member) => console.log(`${member.user.tag} has reached the kick threshold.`));

antiSpam.on("spamThresholdWarn", (member) => console.log(`${member.user.tag} has reached the warn threshold.`));

antiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} has been warned.`));

client.login(token);
