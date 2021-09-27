const gameModel = require("../models/gameModel");
const jwt = require('jsonwebtoken');
require("dotenv").config();

let gameController = {
    /**
     * Creates a new game for the user and stores the new game information in game storage. Sends the user a json message with their new game.
    */
    createNewGame: (_req, res) => {
        const newGame = gameModel.constructGame();
        const newGameList = gameModel.addNewGameToList(newGame);
        gameModel.writeGames(newGameList);

        const token = jwt.sign(
            { game: newGame.gameId },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Redirect user to game page to start playing (this did not work due to cors issue)
        // res.redirect(`http://localhost:3000/game/${newGame.gameId}`);
        res.status(200).json({ newGame, token });
    },

    /**
     * Responds to the user with gameId of their outstanding session.
    */
    restoreGameSession: (req, res) => {
        // Do I want to pull and server gameData to pass as props from client-side HomeHero to Game Page?
        res.status(200).json({ gameId: req.decoded })
    },

    /**
     * Provides the user with game data related to the game session associated with them.
    */
    getCurrentGameData: (req, res) => {
        const game = gameModel.readGames().find(game => game.gameId === req.params.gameId);
        game 
        ? res.status(200).json(game)
        : res.status(400).json({ message: 'Unable to find a game with the provided id' });
    },
    
    /**
     * Finds a game session and updates the save data.
    */
    updateGameData: (req, res) => {
        const players = [req.body.player];
        let updatedGame;
        req.body.opponents.map(opponent => players.push(opponent));
        const updatedGamesList = gameModel.readGames().map(game => {
            game.gameId === req.params.gameId
            return updatedGame = {
                ...game,
                currentTurn: req.body.roundCount,
                players: players
            }
        });
        gameModel.writeGames(updatedGamesList);
        res.status(200).json(updatedGame)
    },

    /**
     * 
    */
    deleteGame: (req, res) => {

    },
}

module.exports = gameController;