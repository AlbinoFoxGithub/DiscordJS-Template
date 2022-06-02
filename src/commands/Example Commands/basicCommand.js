const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js'); // this is required for making embeds.

/*
This is a command template for a basic response. If you want to start a new command, you can copy this file.
*/

module.exports = {
    data: new SlashCommandBuilder()
        .setName('basic-command') // Command name CANNOT have uppercase letters, special characters, or spaces!
        .setDescription('the basic command example'), // Description is REQUIRED!
    async execute(interaction, client) {
        await interaction.reply({ content: 'this is a response!' }); // this is a basic response. everyone can view the response.

        /*
        Ephemeral responses are responses that only you can see. 
 
        Example:
        await interaction.reply({ content: 'this is a response!', ephemeral: true });
        */

        setTimeout(function () { // a Timeout makes the bot wait a certain amount of time before perfoming the action that is inside it. in this case, it is waiting 10 seconds, then editing the message.
            // Embed Example
            // Source: https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Embed Example')
                .setURL('https://discord.js.org/')
                .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
                .setDescription('Some description here')
                .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addField('Inline field title', 'Some value here', true)
                .setImage('https://i.imgur.com/AfFp7pu.png')
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' })

            interaction.editReply({ content: 'This is a edited response!', embeds: [embed] }); // this edits a reply that has already been sent. If you want to send this reply alone, use .reply instead of .editReply || Note: you can't send 2 replys using .reply both times


        }, 2000); // 2000 = 2s (counts in miliseconds)



    }
}