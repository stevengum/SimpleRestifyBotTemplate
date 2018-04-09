# <a id="title"></a>Simple Restify Bot Template for Quick Starts and Reproductions

## Index:

#### [NPM](#npm) | [Actual Code](#actual_code) | [Legal](#legal)

___

## <a id="npm"></a>[NPM](#title):

- BotBuilder ^3.7.0
- Restify ^4.3.0
- dotenv ^4.0.0

___

## <a id="actual_code"></a>[Actual code](#title):

```js
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
```

___

## <a id="legal"></a>[Legal](#title):

Author assumes no liability. 
