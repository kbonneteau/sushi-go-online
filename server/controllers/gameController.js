const gameModel = require("../models/gameModel");

let gameController = {
    /**
     * Creates a new game for the user and stores the new game information in game storage. Sends the user a json message with their new game.
    */
    createNewGame: (_req, res) => {
        const newGame = gameModel.constructGame();
        const newGameList = gameModel.addNewGameToList(newGame);
        gameModel.writeGames(newGameList);
        
        // Redirect user to game page to start playing (this did not work due to cors issue)
        // res.redirect(`http://localhost:3000/game/${newGame.gameId}`);
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