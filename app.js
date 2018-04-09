var builder = require('botbuilder'); 
var restify = require('restify');
require('dotenv').config();

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector);

// Add MemoryBotStorage to bot as the Bot State API is deprecated.
bot.set('storage', new builder.MemoryBotStorage());
