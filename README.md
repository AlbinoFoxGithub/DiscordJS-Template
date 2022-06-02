# DiscordJS-Template
 
 hello! this is the discord.js v13.7.0 template that explains basic commands, buttons, and select menus. Use this for any use you want.
 
 ## Usage
 
Make sure that you rename `.env.example.txt` to `.env` or else the bot will not work. in the `.env` file, make sure you replace `<ENTER BOT TOKEN HERE>` with your bots token. 

in `src/functions/handleCommands.js`, make sure you fill in the fields `clientId` and `guildId`. if these are left blank, your bot will error and will not be able to run. make sure that you put the guild id of the server you want to use this bot in, as it will not show the commands if it is a different id.

to run the bot, open a terminal/command prompt in the main folder (make sure its not the src folder), and run the command `npm run dev`

If you want to use the auto PM2 start file, make sure [PM2](https://pm2.keymetrics.io) is installed using `npm install pm2 -g`

**MAKE SURE YOU HAVE ENABLED THE INTENTS IN THE DEVELOPER PORTAL!!!**

### Requirements
* Windows 10 OS or Later
* 4 GB RAM (Node.JS requirement)
* 10 GB free space (Node.JS requirement)
* [Node.JS](https://nodejs.org/en/) V16 (6.0 or Higher)
* [Discord.js V13](https://discord.js.org/#/) (13.7.0 or Higher)
* a Code Editor ([Atom](https://atom.io), [VSC](https://code.visualstudio.com), etc.)
* a [Discord Application](https://discord.com/developers/applications)
* Discord Developer Mode Enabled (Discord Client)
### How to Enable Discord Developer Mode
![how to enable developer mode](https://im5.ezgif.com/tmp/ezgif-5-b4f03b7ad3.gif)
