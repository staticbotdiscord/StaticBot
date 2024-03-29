const path = require('path')
const { readdirSync } = require('fs')
const eventsPath = path.join(__dirname, '../events');
const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js'));

const events = (client) => {
	for (const file of eventFiles) {
	    const filePath = path.join(eventsPath, file);
	    const event = require(filePath);
	    if (event.once) {
		    client.once(event.name, (...args) => event.execute(...args));
	    } else {
		    client.on(event.name, (...args) => event.execute(...args));
	    }
    }
}

module.exports = events