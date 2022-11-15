const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays your favorite song'),
}

// GOALS :

// require input after "/play"
// store in *userInput*
// https://www.youtube.com/results?search_query= + *userInput* or link with a youtube API somehow?
// connect to voice channel of user who executed commmand
// play first result (?)
// disconnect after x amount of time with no further play requests
