const router = require("express").Router();
const cardController = require('../controllers/cardController');

router.route("/")
    .get(cardController.getPlayingCards);

module.exports = router;