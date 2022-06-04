# DiscordJS-Template
 
 hello! this is the discord.js v13.7.0 template that explains basic commands, buttons, and select menus. Use this for any use you want.
 
 ## Usage
 
 Discord.js Docs: https://discord.js.org/#/docs/main/stable/general/welcome
 
 Discord.js Guide: https://discordjs.guide/#before-you-begin
 
Make sure that you rename `.env.example.txt` to `.env` or else the bot will not work. in the `.env` file, make sure you replace `<ENTER BOT TOKEN HERE>` with your bots token. 

in `src/functions/handleCommands.js`, make sure you fill in the fields `clientId` and `guildId`. if these are left blank, your bot will error and will not be able to run. make sure that you put the guild id of the server you want to use this bot in, as it will not show the commands if it is a different id.

### Global Command Option

if you would like your bot to have global commands instead of server only (guild) commands. follow these steps:

* Go to `src/functions/handleCommands.js`

* Find:
```js
await rest.put(
    Routes.applicationGuildCommands(clientId, guildId), {
    body: client.commandArray
 },
 );
```
* Replace it with:
```js
await rest.put(
	Routes.applicationCommands(clientId),
	{ body: client.commandArray },
);
```

### Running The Bot

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
To start, open Discord and sign in. Once you’re signed in, select the settings icon in the bottom-left corner next to your username.

![image](https://user-images.githubusercontent.com/70042305/171981758-f5e08d99-8565-4705-8802-0ffb464e7dc4.png)

In Discord’s settings menu, select the “Appearance” option in the menu on the left.

![image](https://user-images.githubusercontent.com/70042305/171981782-cf729b2f-8524-47fe-bd5c-3c3baf274583.png)

In the “Appearance” menu, you’ll see settings that impact how Discord appears to you, with theme options, message sizes, and accessibility settings.


Scroll down to the bottom, then select the slider next to the “Developer Mode” option.
![image](https://user-images.githubusercontent.com/70042305/171981833-1c809a74-9114-4385-ab01-a85d2d1cae3c.png)

## Hosting

There are several ways of hosting a discord bot. The method I included above is how to host locally from your computer using PM2. With this method, your computer would **need to be on and connected to the internet**. If you would like to host with a service like [Heroku](heroku.com), I would recommend you watch [this video](https://www.youtube.com/watch?v=uH3nWjql2IE).
