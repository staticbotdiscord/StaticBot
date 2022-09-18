const { StaticBotClient } = require('./lib');
const config = require('./config');
require('dotenv').config()

const client = new StaticBotClient();

require('./src/handler')(client)

client.login(config.token ?? process.env["TOKEN"]);