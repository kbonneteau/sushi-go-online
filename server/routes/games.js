const router = require("express").Router();
const gameController = require('../controllers/gameController');

// add filter middleware before game controller to sanitize harmful characters?
router.route("/")
    .post(gameController.createNewGame);

module.exports = router;