module.exports = {
    name: 'join',
    description: 'Join voice channel.',
     async execute(message) {

        message.channel.bulkDelete(1)

        if (!message.guild) return;

        if (message.member.voice.channel) {
        
            message.member.voice.channel.join();
        }
        else {
            message.reply("Tu n'est pas dans un salon vocal.");
        }
    }
};