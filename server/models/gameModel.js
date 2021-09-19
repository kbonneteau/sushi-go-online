const fs = require('fs');
const { v4: uuid } = require('uuid');
const gameData = './data/games.json';

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
const writeGames = games => fs.writeFileSync(gameData, JSON.stringify(games), null, 2);

/**
 * Creates a newly formatted game session.
 * @returns {object} containing required game properties
 */

// Note to self: should I have the creation of hands handled at this point?
const constructGame = () => {
    return {
        gameId: uuid(),
        timestamp: Date.now(),
        currentTurn: 1,
        player: {
            cardsInHand: [],
            cardsPlayed: []
        },
        computer1: {
            cardsInHand: [],
            cardsPlayed: []
        },
        computer2: {
            cardsInHand: [],
            cardsPlayed: []
        },
        computer3: {
            cardsInHand: [],
            cardsPlayed: []
        }
    };
};

// Post to update the stored data on each turn.  Can this be included in the above instead?
const updateGameData = existingGameData => {};


module.exports = {
    readGames,
    addNewGameToList,
    writeGames,
    constructGame,
    updateGameData
}