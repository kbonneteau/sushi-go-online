const gameModel = require("../models/gameModel");

let gameController = {
    /**
     * 
    */
    createNewGame: (_req, res) => {
        // Create new game session.
        // Save game session to all game sessions.
        // Redirect user to game page to start playing!
        const newGame = gameModel.constructGame();
        const newGameList = gameModel.addNewGameToList(newGame);
        gameModel.writeGames(newGameList);
        
        // res.redirect(`/game/${newGame.gameId}`);
        res.status(200).json(newGame);
    },

    /**
     * 
    */
    restoreGameSession: (req, res) => {

    },

    /**
     * 
    */
    deleteGame: (req, res) => {

    },
}

module.exports = gameController;