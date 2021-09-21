const router = require("express").Router();
const cardController = require('../controllers/cardController');

// add filter middleware before card controller to sanitize harmful characters?
router.route("/")
    // .post(cardController.createNewGame);
    .get((req, res) => res.send('card route successfully reached'));

module.exports = router;