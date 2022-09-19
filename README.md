# StaticBot

Static Bot is a public Discord Bot, which is designed for self hosting and customizability. It was inspired by [RedBot](https://github.com/Cog-Creators/Red-DiscordBot).
We worked hard on this, so when you use the bot you are **required** to give credit.

# Table of Contents

### [Setting up StaticBot™️](#setup)

### [Configuring StaticBot™️](#configuration)

### [Running StaticBot™️](#running)

<br>

---

<br>

## Setup

1. Download
   - Download [NodeJS version 16.9.0 or higher here](https://nodejs.org/en/download/current/).
   - Download [NPM version 7.9.0 or higher here]()
   - Run `npm i @discordjs/rest@1.1.0 discord.js@14.3.0 dotenv@16.0.2` in the command line
2. Bot Setup
	- Head over to [Discord Developers Applications Page](https://discord.com/developers/applications) and press **New Application**. You will be prompted with a modal. Choose the name of your bot, accept the agreement and press **Create**. When you have done so go to the **Bot** tab on the left. Press **Add Bot** and say yes to the modal which you are prompted with. You may also change the name of your bot and add an profile picture here. Press reset token and gain your token. Copy it, this will be used later. Finally, go to the **oAuth2** tab and press **URL Generator** on the left. Checkmark the `bot` and `application.commands` options. You will be given a URL. This is how you add your bot to servers!

## Configuration

Static Bot has many different options for configuration. To get started, open up the file '/config.js' in a text editor. Once you've opened the file, feel free to change the options!

- The `token` is your bot token, this is found on the application page on [Discord Developers](https://discord.com/developers/applications). You may type **null** if you intend on using an env named `TOKEN`. If you plan on doing this create a file named `.env` and put `TOKEN="your-token"` in it.

- The `guildId` is only to be used if you want Slash Commands to register to a single guild. If you want them to register to all guilds type **null**. Otherwise get your Guild ID by right clicking your guild and pressing **Copy id** if this option doesn't show go to User Settings -> Advanced -> Developer Mode -> Toggle On.

- The `clientId` is found on [Discord Developers](https://discord.com/developers/applications) simply, go to your application and copy the Application ID.

- The `thinkingMessage` is a string of what your bot will say while running the commands before it changes to the response, set this as whatever you want.

- The `thinkingMessageLocales` is your `thinkingMessage` but in other languages so that your bot has multi-language support.

- The `staffEmoji` is the emoji that will be used on buttons that will be on commands a staff member sends to inform everyone they are staff of the bot. Simply type `\:your-custom-emoji:` and get the ID (The numbers) and the name (The letters). Put these in the `id` and `name` respectively. If your emoji is animated, change animated to `true`.

- The `staff` is an array of all staff member IDs, simply put the IDs of all your staff members here. When they run a command it will add a button as mention in `staffEmoji`.

- The `activityName` is what your bot will say on its activity for example, playing **My Activity Name**.

- The `activityType` is the type of activity
   - `ActivityType.Playing` = **Playing** Your activity name
   - `ActivityType.Streaming` = **Streaming** Your activity name
   - `ActivityType.Listening` = **Listening to** Your activity name
   - `ActivityType.Watching` = **Watching** Your activity name
   - `ActivityType.Competing` = **Competing in** Your activity name

- The `status` is the status of the bot this can be:
   - `online` = This is the standard status. The green dot
   - `idle` = This is the idle status. The yellow dot.
   - `dnd` = This is the Do not disturb status. The red dot with a white line in the middle
   - `invisible` = This is the Invisible status. It will show your bot as offline. However, it will still respond to commands.


## Running