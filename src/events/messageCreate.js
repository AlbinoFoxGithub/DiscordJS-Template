const { Interaction } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    async execute(messageCreate, client) {
        if (messageCreate.channel.type === 'DM') return;
    },
};