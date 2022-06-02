const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

// docs: https://discordjs.guide/interactions/select-menus.html#select-menus

/*
This is a command template for a select menu response. If you want to start a new select menu command, you can copy this file.
*/

module.exports = {
    data: new SlashCommandBuilder()
        .setName('select-menu-example') // Command name CANNOT have uppercase letters, special characters, or spaces!
        .setDescription('Select Menu Response Example'), // Description is REQUIRED!
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select-menu-example') // the custom ID
                    .setPlaceholder('Make a selction.') // This is the text that shows when a selection hasn't been made
                    .setMaxValues(1) // the max amount of selections that can be chose
                    .setMaxValues(1) // the minimum amount of items that can be selection (commonly 1 or 0)
                    .addOptions([
                        {
                            label: 'Option 1', // the text that appears as the option. Required.
                            description: 'The first option', // the description of the option. Not required.
                            value: 'option-1' // the same thing as CustomID. Required.
                        },
                        {
                            label: 'Option 2',
                            description: 'the second option',
                            value: 'option-2'
                        },
                    ]),
            );

        await interaction.reply({ content: 'Pick a option!', components: [row] });
    }
}

/*
The rest of this command is in the interactionCreate file in the events folder
*/