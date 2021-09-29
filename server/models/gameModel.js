const fs = require('fs');
const { v4: uuid } = require('uuid');
const gameData = './data/games.json';
const cardModel = require("./cardModel");

/**
 * Read all games in persistent storage.
 * @returns {array} of data in storage.
 */
const readGames = () => JSON.parse(fs.readFileSync(gameData));

/**
 * Creates a new array containing the current games in storage and the new game.
 * @param {object} gameObject 
 * @returns {array} of games including the new game created.
 */
const addNewGameToList = gameObject => [...readGames(), gameObject];

/**
 * Writes array of games to storage location 
 * @param {array} games 
 * @returns {undefined}
 */
const writeGames = games => fs.writeFileSync(gameData, JSON.stringify(games, null, 2));


/**
 * Initializes an array of player objects.
 * @returns {array} of players and their hands.
 */
const constructPlayers = () => {
    return [
        {
            playerPosition: 1,
            icon: "http://localhost:8080/player-icons/yellow.png",
            cardsInHand: [],
            cardsPlayed: []
        },
        {
            playerPosition: 2,
            icon: "http://localhost:8080/player-icons/purple.png",
            cardsInHand: [],
            cardsPlayed: []
        },
        {
            playerPosition: 3,
            icon: "http://localhost:8080/player-icons/orange.png",
            cardsInHand: [],
            cardsPlayed: []
        },
        {
            playerPosition: 4,
            icon: "http://localhost:8080/player-icons/green.png",
            cardsInHand: [],
            cardsPlayed: []
        }
    ]
}

/**
 * Creates a newly formatted game session. Max cards are hard-coded as number of players is pre-designated
 * @returns {object} containing required game properties
 */
const constructGame = () => {
    return {
        gameId: uuid(),
        timestamp: Date.now(),
        currentTurn: 1,
        players: cardModel.dealCardsToPlayers(constructPlayers(), 7)
    };
};

// Post to update the stored data on each turn.  Can this be included in the above instead?
const updateGameData = existingGameData => {};


module.exports = {
    readGames,
    addNewGameToList,
    writeGames,
    constructPlayers,
    constructGame,
    updateGameData
}