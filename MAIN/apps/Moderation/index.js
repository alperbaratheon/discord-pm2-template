const discord = require("discord.js");
const client = new discord.Client({ intents: Object.values(discord.Intents.FLAGS).reduce((x, y) => x + y, 0) });
const settings = require("../../base/globalsettings.json")

require("../../base/app.js")(client)

client.login(settings.tokens.Executive).then(console.log("Maymun Moderasyona'a girildi"))