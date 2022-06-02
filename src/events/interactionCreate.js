const { MessageEmbed, MessageAttachment, MessageCreate, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {

                if (command.permisssions && command.permissions.length > 0) {
                    if (!interaction.member.permissions.has(command.permissions)) return await interaction.reply({ content: `**❌Unable to activate command. Missing Permissions** ||\`${command.permissions}\`||`, ephemeral: true });
                }

                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true
                });
            }
        } else if (interaction.isButton()) { // does actions if the input is a button
            if (interaction.customId.includes('-example')) { // filters the buttons that end/include '-example'
                if (interaction.customId.includes('button-1')) { // checks for the button input. checks for 'button-1-example'
                    interaction.reply({ ephemeral: true, content: 'Button 1 Response!' }); // sends a private reply after pressing the button.
                    // vvv how to update a message vvv
                    // interaction.update({ content: 'Button 1 Edited!' }); 
                } else if (interaction.customId.includes('button-2')) {
                    interaction.reply({ ephemeral: true, content: 'Button 2 Response!' });
                }
            }
        } else if (interaction.isSelectMenu()) { //does actions if the input is a select menu (aka. Dropdown)
            if (interaction.customId.includes('-example')) { // filters the dropdowns/select menus the end/include '-example'
                if (interaction.customId.includes('select-menu')) { // if 'select-menu-example' is activated, it will do what is inside this function
                    await interaction.values.forEach(async value => { // gets the values/options in the dropdown/select menu
                        if (value === 'option-1') { // if option-1 is selected, it will do what is inside this function
                            await interaction.reply({ ephemeral: true, content: 'This is the first option reply!' });
                        } else if (value === 'option-2') { // if option-2 is selected, it will do what is inside this function
                            await interaction.reply({ ephemeral: true, content: 'This is the second option reply!' });
                        }
                    })
                }
            }
        }
        if (!interaction.isCommand()) return;
    },
};