const handler = (client) => {
    require('./commands')(client);
    require('./events')(client);
};

module.exports = handler;
