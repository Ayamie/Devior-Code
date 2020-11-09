module.exports = {
    name: 'play',
    description: 'Play music.',
    async execute(message, args) {
      
      message.channel.bulkDelete(1)
      
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 0.5,
              });

              dispatcher.on('error', () => {
                message.reply("Ce n'est pas possible de jouer cette musique.");
                dispatcher.destroy();
                message.member.voice.channel.leave();
              })

              dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
              })
          }
          else {
            message.reply("Vous devez d'abord rejoindre un salon vocal.");
          }
    }
};