module.exports = {
    name: 'leave',
    description: 'Leave voice channel.',
     async execute(message) {
         
        message.channel.bulkDelete(1)
        
        if (!message.guild) return;

        if (message.member.voice.channel) {
            message.member.voice.channel.leave();
            message.channel.send(`Merci de m'avoir utilisé.`);
        }
        else {
            message.reply("Je ne suis pas dans un salon vocal.")
        }
    }
};