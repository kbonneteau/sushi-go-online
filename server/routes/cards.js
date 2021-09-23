const router = require("express").Router();
const cardController = require('../controllers/cardController');

// add filter middleware before card controller to sanitize harmful characters?
router.route("/")
    .get(cardController.getPlayingCards);

module.exports = router;