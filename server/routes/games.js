const router = require("express").Router();

const gameController = require('../controllers/gameController');

router.route("/")
    .post(gameController.createNewGame)
    .get(gameController.restoreGameSession);

router.route("/:gameId")
    .get(gameController.getCurrentGameData)
    .put(gameController.updateGameData)
    .delete(gameController.deleteGame)

module.exports = router;