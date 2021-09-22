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
     * 
    */
    restoreGameSession: (req, res) => {
        console.log('restore game session')
        // console.log(req.headers.authorization)
        // const authToken = req.headers.authorization.split(" ")[1];

        // jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        //     if(err) {
        //         next();
        //     }
        //     console.log('decoded:', decoded)
        //     req.decoded = decoded.game;
        //     console.log('req.decoded:', req.decoded)
        // });
        res.send('valid auth token.  Welcome to restore game session')
    },

    /**
     * 
    */
    deleteGame: (req, res) => {

    },
}

module.exports = gameController;