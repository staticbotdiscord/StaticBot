const { Client, GatewayIntentBits, Collection } = require('discord.js');

class StaticBotClient extends Client {
    constructor() {
        super({ shards: 'auto', intents: [GatewayIntentBits.Guilds] });
        this.commands = new Collection();
        this.buttons = new Collection();
        this.contexts = new Collection();
        this.selects = new Collection();
        this.modals = new Collection();
        this.complete = new Collection();
    }
}

module.exports = StaticBotClient;
