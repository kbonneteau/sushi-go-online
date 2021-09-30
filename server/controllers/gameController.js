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
        res.status(200).json({ newGame, token });
    },

    /**
     * Responds to the user with gameId of their outstanding session.
    */
    restoreGameSession: (req, res) => {
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
     * Removes the requested game session from the list of active games.
    */
    deleteGame: (req, res) => {
        const foundGame = gameModel.readGames().find(game => game.gameId === req.params.gameId);
        if(foundGame === undefined){
            return res.status(404).send('server unable to find game');
        }
        const updatedGamesList = gameModel.readGames().filter(game => game.gameId !== foundGame.gameId);
        gameModel.writeGames(updatedGamesList);
        res.status(200).json(foundGame);
    },
}

module.exports = gameController;