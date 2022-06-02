const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js'); // MessageActionRow is required for Buttons and Select Menus (aka. Dropdown menus)

// docs: https://discordjs.guide/interactions/buttons.html#building-and-sending-buttons

/*
This is a command template for a button response. If you want to start a new button command, you can copy this file.
*/

module.exports = {
    data: new SlashCommandBuilder()
        .setName('basic-button-command') // Command name CANNOT have uppercase letters, special characters, or spaces!
        .setDescription('Basic Button Response Example'), // Description is REQUIRED!
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton() // this is the button constructor
                    .setCustomId('button-1-example') // custom id is how you detect a input from this button. CustomID CANNOT have uppercase letters, special characters, or spaces!
                    .setLabel('Button 1') // This is the text that will appear on your button
                    .setEmoji('😄') // this is the emoji that will appear on the left side of your button. can be standalone (without .setLabel) or with .setLabel
                    .setDisabled(false) // makes the button able to be pressed or not (boolean)
                    .setStyle('PRIMARY'), // style is the color you want.
                new MessageButton()
                    .setCustomId('button-2-example')
                    .setLabel('Button 2')
                    .setEmoji('🙁')
                    .setDisabled(false)
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('button-disabled-example')
                    .setLabel('❌Disabled')
                    .setDisabled(true)
                    .setStyle('DANGER')
            )


        interaction.reply({ content: `Buttons!`, components: [row] }); // the 'components' sections is how you add the buttons to your reply/message.
    }
}

/*
The rest of this command is in the interactionCreate file in the events folder
*/