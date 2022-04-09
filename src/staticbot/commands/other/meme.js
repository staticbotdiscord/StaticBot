const { Message, Client, MessageEmbed } = require("discord.js");
const got = require("got");

module.exports = {
    name: "meme",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        got('https://www.reddit.com/r/memes/random/.json').then(res => {
            let content = JSON.parse(res.body)
            const embed = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("RANDOM")
                    .setFooter({ text: `👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`} )
			message.channel.send({ embeds: [embed] })
        })
    },
};
