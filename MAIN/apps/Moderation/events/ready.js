const { getVoiceConnection, joinVoiceChannel } = require("@discordjs/voice");
const settings = require("../../../base/globalsettings.json")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const VoiceChannel = client.channels.cache.get(settings.guild.Bot_Voice);
		joinVoiceChannel({
		  channelId: VoiceChannel.id,
		  guildId: VoiceChannel.guild.id,
		  adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
		  selfDeaf: true,
		  selfMute: true
		});

		setInterval(() => {
			client.user.setActivity(settings.guild.Bot_Durum,
				{ type: settings.guild.Bot_Type, status: settings.guild.Bot_Status });
		}, 10000);	
	},
};
