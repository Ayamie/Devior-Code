module.exports = {
    name: "support",
    description: "Get a link to invite the user to the supprot server",
    execute(message) {
        
        message.channel.bulkDelete(1)
        
        message.channel.createInvite()
    .then(message.reply(`https://discord.gg/zNa3rdW`))
    .catch(console.error);
    }
};