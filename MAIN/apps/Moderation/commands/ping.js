const Discord = require("discord.js");
const ms = require("ms");
const request = require("request");
const moment = require("moment");
const db = require("quick.db")
moment.locale("tr");

module.exports = {
    slash: false, 
    name: ['say'], 
    async execute(client, message, args) {
    message.reply(`${client.ws.ping}ms`)        
    }
}